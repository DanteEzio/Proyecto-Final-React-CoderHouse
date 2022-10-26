import {
  getDocs,
  query,
  where,
  orderBy,
  getDoc,
  doc,
  writeBatch,
  addDoc,
  documentId,
} from "firebase/firestore"; // -> Esta función nos va a permitir poder consultar todos nuestros productos
import { db } from "."; // -> Recuperamos la direccion de nuestra BD
import { collection } from "firebase/firestore"; //de que coleccion de mi bd debo traer los datos, con esta funcion creo toda la referencia completa de los datos que quiero obtener
// import Swal from "sweetalert2";
import Swal from "sweetalert2";

export const getProducts = (categoryId) => {
  return new Promise((resolve, reject) => {
    // Generamos nuestra consulta para poder filtrar
    // Si tengo "categoryId" acepta consultas, en caso contrario muestrame todos los productos
    const collectionRef = categoryId
      ? query(collection(db, "products"), where("categoria", "==", categoryId))
      : query(collection(db, "products"), orderBy("id"));

    getDocs(collectionRef)
      .then((response) => {
        // console.log(response); // -> La respuesta a los documento es un Array por lo tanto lo tenemos que adaptar a lo que nosotros queremos mostrar

        // Adaptamos lo que tenemos en response docs, para transformar el Array usamos el metodo "map" -> Con cada documento
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          //   console.log(data);
          return { id: doc.id, ...data }; // -> Recuperamos el id ya que este se encuentra un nivel mas arriba y hacemos el spread
        });

        resolve(productsAdapted);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getProductsById = (productId) => {
  return new Promise((resolve, reject) => {
    const docRef = doc(db, "products", productId);
    // console.log(docRef)

    getDoc(docRef)
      .then((doc) => {
        const data = doc.data();

        const productAdapted = { id: doc.id, ...data };

        resolve(productAdapted);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const createOrder = async (data, cart, totalPrice, clearCart) => {
  try {
    const objOrder = {
      buyer: {
        name: data?.name,
        phone: data?.phone,
        email: data?.email,
      },
      items: cart,
      total: totalPrice,
    };

    const ids = cart.map((prod) => String(prod.id));
    const productsRef = collection(db, "products");

    const productsAddedFromFirestore = await getDocs(
      query(productsRef, where(documentId(), "in", ids))
    );
    const { docs } = productsAddedFromFirestore;

    const batch = writeBatch(db);
    const outOfStock = [];

    docs.forEach((doc) => {
      const dataDoc = doc.data();
      const stockDb = dataDoc.stock;

      const productAddedToCart = cart.find(
        (prod) => String(prod.id) === doc.id
      );
      const prodQuantity = productAddedToCart?.quantity;

      if (stockDb >= prodQuantity) {
        batch.update(doc.ref, { stock: stockDb - prodQuantity });
      } else {
        outOfStock.push({ id: doc.id, ...dataDoc });
      }
    });

    if (outOfStock.length === 0) {
      await batch.commit();

      const orderRef = collection(db, "orders");
      const orderAdded = await addDoc(orderRef, objOrder);

      // console.log(`El id de su orden es: ${orderAdded.id}`);
      clearCart(); // Limpiamos el carrito para que no duplique su pedido

      Swal.fire({
        showConfirmButton: true,
        title: `Su compra se realizo de manera éxitosa`,
        text: `Su Número de Orden Es: ${orderAdded.id}`,
        confirmButtonText: "Deacuerdo",
        icon: "success",
        background: "#75b900ab",
        color: "#eee",
      });
    } else {
      console.log("Hay productos fuera de stock");
    }
  } catch (error) {
    console.log(error);
  }
};
