import carShopping from "./assets/carShopping.svg";
import "./carStyle/carWidget.css";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/Cart">
      <button className="btn carWidget">
        <img className="imagenCarrito" src={carShopping} alt="" />
        <span className="contadorCarrito">{totalQuantity}</span>
      </button>
    </Link>
  );
};

export default CartWidget;
