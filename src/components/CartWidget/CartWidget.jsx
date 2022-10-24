import carShopping from "./assets/carShopping.svg";
import "./carStyle/carWidget.css";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <button
      className={
        totalQuantity === 0
          ? "btn carWidget border-0 disabled"
          : "btn carWidget border-0"
      }
    >
      <Link to="/Cart">
        <img className="imagenCarrito" src={carShopping} alt="" />
        <span className="contadorCarrito">{totalQuantity}</span>
      </Link>
    </button>
  );
};

export default CartWidget;
