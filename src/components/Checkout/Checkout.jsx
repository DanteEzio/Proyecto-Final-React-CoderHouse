import { useState, useContext } from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { CartContext } from "../../Context/CartContext";
import {
  getDocs,
  addDoc,
  collection,
  where,
  query,
  documentId,
  writeBatch,
} from "firebase/firestore";
import { db } from "../../services/firebase";
import LoadingWidget from "../LoadingWidget/LoadingWidget";
// import CheckoutForm from "./CheckoutForm/CheckoutForm";
import { useForm } from "react-hook-form";

const Checkout = () => {
  const [loading, setLoading] = useState(false);

  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // const onSubmit = (data) => {
  //   alert(JSON.stringify(data));

  // };

  const createOrder = async (data) => {
    // Esto nos sirve para que el usuario no de click dos veces en el mismo boton
    setLoading(true);
    try {
      const objOrder = {
        buyer: {
          name: data.name,
          phone: data.phone,
          email: data.email,
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

        // console.log(`El id de su orden es: ${orderAdded.id}`);
        clearCart(); // Limpiamos el carrito para que no duplique su pedido
        
        Swal.fire({
          showConfirmButton: true,
          title: `Su compra se realizo de manera éxitosa`,
          text: `Su # de orden es: ${orderAdded.id}`,
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
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingWidget />;
  }
  return (
    <div className="formCheckout">
      <div className="container p-4">
        <form
          className="form-control formContainerCheckout p-4"
          onSubmit={handleSubmit(createOrder)}
        >
          <h2 className="text-center p-2">Completa los Siguientes Campos</h2>
          <div className="mb-3">
            <label className="form-label">Nombre Completo</label>
            <input
              className="form-control"
              {...register("name", {
                required: "Nombre Obligatorio",
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Este campo solo acepta texto",
                },
              })}
            />
            <p className="text-danger p-2">{errors.name?.message}</p>
          </div>
          <div className="mb-3">
            <label className="form-label">Teléfono</label>
            <input
              className="form-control"
              {...register("phone", {
                required: "Teléfono Obligatorio",
                pattern: {
                  value: /^[0-99]+$/i,
                  message: "Este campo solo acepta números",
                },
                minLength: {
                  value: 10,
                  message: "El télefono debe de tener 10 carácteres",
                },
                maxLength: {
                  value: 10,
                  message: "El télefono debe de tener 10 carácteres",
                },
              })}
            />
            <p className="text-danger p-2">{errors.phone?.message}</p>
          </div>

          <div className="mb-3">
            <label className="form-label">Correo</label>
            <input
              type="email"
              className="form-control"
              {...register("email", {
                required: "Correo Obligatorio",
              })}
            />
            <p className="text-danger p-2">{errors.email?.message}</p>
          </div>

          <div className="mt-4 text-center">
            <button
              // onClick={createOrder}
              type="submit"
              className="btn btn-primary btnCheckout"
            >
              Finalizar Compra
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
