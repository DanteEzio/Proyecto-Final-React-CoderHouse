import { useState, useContext, useEffect } from "react";
import "./Checkout.css";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser, faCheck
} from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../Context/CartContext";
// import {
//   getDocs,
//   addDoc,
//   collection,
//   where,
//   query,
//   documentId,
//   writeBatch,
// } from "firebase/firestore";
// import { db } from "../../services/firebase";
import LoadingWidget from "../LoadingWidget/LoadingWidget";
// import CheckoutForm from "./CheckoutForm/CheckoutForm";
import { useForm } from "react-hook-form";
import { createOrder } from "../../services/firebase/firestore";
import { useParams } from "react-router-dom";

const Checkout = () => {
  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const {
    cart,
    totalPrice,
    clearCart,
    totalQuantity,
    removeItem,
    getProductTotalPrice,
  } = useContext(CartContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // const [data, setData] = useState({
  //   name: "",
  //   phone: "",
  //   email: ""
  // });

   

  // const onSubmit = (data) => {
  //   alert(JSON.stringify(data));
  // };

  // const createOrder = async (data) => {
  //   // Esto nos sirve para que el usuario no de click dos veces en el mismo boton
  //   setLoading(true);
  //   try {
  //     const objOrder = {
  //       buyer: {
  //         name: data.name,
  //         phone: data.phone,
  //         email: data.email,
  //       },
  //       items: cart,
  //       total: totalPrice,
  //     };

  //     // console.log(objOrder);

  //     // const collectionRef = collection(db, "orders");
  //     // addDoc(collectionRef, objOrder);

  //     const ids = cart.map((prod) => String(prod.id));
  //     const productsRef = collection(db, "products");

  //     const productsAddedFromFirestore = await getDocs(
  //       query(productsRef, where(documentId(), "in", ids))
  //     );
  //     const { docs } = productsAddedFromFirestore;

  //     const batch = writeBatch(db);
  //     const outOfStock = [];

  //     docs.forEach((doc) => {
  //       const dataDoc = doc.data();
  //       const stockDb = dataDoc.stock;

  //       const productAddedToCart = cart.find(
  //         (prod) => String(prod.id) === doc.id
  //       );
  //       const prodQuantity = productAddedToCart?.quantity;

  //       if (stockDb >= prodQuantity) {
  //         batch.update(doc.ref, { stock: stockDb - prodQuantity });
  //       } else {
  //         outOfStock.push({ id: doc.id, ...dataDoc });
  //       }
  //     });

  //     if (outOfStock.length === 0) {
  //       await batch.commit();

  //       const orderRef = collection(db, "orders");
  //       const orderAdded = await addDoc(orderRef, objOrder);

  //       // console.log(`El id de su orden es: ${orderAdded.id}`);
  //       clearCart(); // Limpiamos el carrito para que no duplique su pedido

  //       Swal.fire({
  //         showConfirmButton: true,
  //         title: `Su compra se realizo de manera éxitosa`,
  //         text: `Su # de orden es: ${orderAdded.id}`,
  //         confirmButtonText: "Deacuerdo",
  //         icon: "success",
  //         background: "#75b900ab",
  //         color: "#eee",
  //       });
  //     } else {
  //       console.log("Hay productos fuera de stock");
  //     }
  //   } catch (error) {
  //     setError(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const { data } = useParams();

  const createOrder2 = (data) => {
    
    createOrder(data, cart, totalPrice, clearCart)
      .then((order) => {
        setOrder(order);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  // useEffect(() => {
  //     console.log("estoy en checkout" + data)
  //   setLoading(true);
    
    

  //   }, []);

  if (loading) {
    return <LoadingWidget />;
  }

  if (error) {
    return <h1>Hubo un Error</h1>;
  }

  return (
    <div className="formCheckout">
      <div className="container p-4">
        {totalQuantity > 0 ? (
          <div className="row">
            <div className="col-4">
              <form
                className="form-control formContainerCheckout p-4"
                // onSubmit={handleSubmit(createOrder)}
              >
                <h2 className="p-2 formTitleCheckout">
                  <FontAwesomeIcon icon={faUser} /> Tus datos
                </h2>
                <div className="mb-3">
                  <label className="form-label">Nombre Completo</label>
                  <input
                    className="form-control"
                    {...register("name", {
                      required: "Nombre Obligatorio",
                      pattern: {
                        value: /^[A-Za-z\s]+$/i,
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
                    className="form-control"
                    {...register("email", {
                      required: "Correo Obligatorio",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message:
                          "El valor ingresado no coincide con el formato del correo electrónico",
                      },
                    })}
                    type="email"
                    placeholder="ejemplo@mail.com"
                  />
                  <p className="text-danger p-2">{errors.email?.message}</p>
                </div>
              </form>
            </div>
            <div className="col-8 resumenPedido">
              <div className="resumenTitle">
                <h1>
                  <FontAwesomeIcon icon={faCheck} /> Resumen del Pedido
                </h1>
              </div>
              <div>
                <table className="table tablaResumenPedido">
                  <thead>
                    <tr className="headerResumenPedido">
                      <th scope="col">Descripción</th>
                      <th scope="col">Precio Unitario</th>
                      <th scope="col">Cantidad</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  <tbody className="bodyResumenPedido">
                    {cart.map((product) => (
                      <tr key={product.id}>
                        <th scope="row">{product.nombre}</th>
                        <td>${product.pDescuento.toLocaleString()} MXN</td>
                        <td>{product.quantity}</td>
                        <td>
                          ${getProductTotalPrice(product.id).toLocaleString()}{" "}
                          MXN
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="footerResumenPedido">
                    <tr>
                      <td></td>
                      <td></td>
                      <td>Total Productos (IVA Incl.) :</td>
                      <td>${totalPrice.toLocaleString()} MXN</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>IMPORTE TOTAL DE COMPRA :</td>
                      <td>${totalPrice.toLocaleString()} MXN</td>
                    </tr>
                  </tfoot>
                </table>
                <div className="mt-4 text-end">
                  <button
                    onClick={handleSubmit(createOrder2)}
                    type="submit"
                    className="btn btn-primary btnCheckout"
                  >
                    Finalizar Compra
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h1 className="text-center compraRealizada">
            Su Compra se realizó de manera exitosa!
          </h1>
        )}
      </div>
    </div>
  );
};

export default Checkout;
