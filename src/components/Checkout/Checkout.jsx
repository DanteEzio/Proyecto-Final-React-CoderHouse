import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import {
  getDocs,
  addDoc,
  collection,
  doc,
  updateDoc,
  where,
  query,
  documentId,
  writeBatch,
} from "firebase/firestore";
import { db } from "../../services/firebase";
import LoadingWidget from "../LoadingWidget/LoadingWidget";

const Checkout = () => {
  const [loading, setLoading] = useState(false);

  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const createOrder = async () => {
    // Esto nos sirve para que el usuario no de click dos veces en el mismo boton
    setLoading(true);
    try {
      const objOrder = {
        buyer: {
          name: "Dante",
          phone: "123456",
          email: "dante@nvidia.io",
        },
        items: cart,
        total: totalPrice,
      };

      console.log(objOrder);

      // const collectionRef = collection(db, "orders");
      // addDoc(collectionRef, objOrder);

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

        console.log(`El id de su orden es: ${orderAdded.id}`);
        clearCart(); // Limpiamos el carrito para que no duplique su pedido
      } else {
        console.log("Hay productos fuera de stock");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingWidget />;
  }

  return (
    <div className="container text-center">
      <h1>Checkout</h1>
      <button onClick={createOrder} className="btn btn-primary">
        Agregar documento
      </button>
    </div>
  );
};

export default Checkout;
