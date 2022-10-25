import "./Cart.css";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cart,
    totalQuantity,
    totalPrice,
    removeItem,
    clearCart,
    getProductTotalPrice,
  } = useContext(CartContext);

  return (
    <>
      <div className="carritoCompras">
        <div className="cartContainer">
          {totalQuantity > 0 ? (
            <div className="container text-center pb-5">
              <div className="pt-5 titleCart">
                <h1>Carrito de Compras</h1>
              </div>
              <table className="table cartTable mb-0 mt-4">
                <thead className="align-middle">
                  {cart.map((product) => (
                    <tr key={product.id}>
                      <th scope="col">
                        <Link to={`/detail/${product.id}`}>
                          <img
                            src={product.img}
                            className="card-img-top CartImg bi-circle-square"
                            alt="..."
                          />
                        </Link>
                      </th>
                      <th scope="col">{product.nombre}</th>
                      <th scope="col">
                        Precio x Unidad: ${product.pDescuento.toLocaleString()}{" "}
                        MXN
                      </th>
                      <th scope="col">{product.quantity}</th>
                      <th scope="col">
                        ${getProductTotalPrice(product.id).toLocaleString()} MXN
                      </th>
                      <th>
                        <button
                          onClick={() => removeItem(product.id)}
                          type="button"
                          className="btn btn-success btn-sm btnRemove"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </th>
                    </tr>
                  ))}
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <th scope="row">Total con envío:</th>
                    <td>{totalQuantity}</td>
                    <td>${totalPrice.toLocaleString()} MXN</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td className="border-0"></td>
                    <td className="border-0"></td>
                    <td className="border-0"></td>
                    <td className="border-0 pt-5">
                      <Link to="/">
                        <button
                          onClick={() => clearCart()}
                          type="button"
                          className="btn btnCleanCart"
                        >
                          Limpiar Carrito
                        </button>
                      </Link>
                    </td>
                    <td className="border-0 pt-5">
                      <Link to="/checkout">
                        <button type="button" className="btn btnCartComprar">
                          Continuar compra
                        </button>
                      </Link>
                    </td>
                    <td className="border-0"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="container text-center pb-5">
              <div className="pt-5 titleCart">
                <h1>Carrito de Compras Vacío</h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
