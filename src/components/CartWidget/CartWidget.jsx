import carShopping from "./assets/carShopping.svg";
import "./carStyle/carWidget.css";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <>
      <button className="btn carWidget">
        <img className="imagenCarrito" src={carShopping} alt="" />
        <span className="contadorCarrito">{totalQuantity}</span>
      </button>
    </>
  );
};

export default CartWidget;
