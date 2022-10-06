import carShopping from "./assets/carShopping.svg"
import "./carStyle/carWidget.css";

export const CartWidget = () => {
  return (
    <>
      <button className="btn carWidget">
        <img className="imagenCarrito" src={carShopping} alt="" />
        <span className="contadorCarrito">0</span>
      </button>
    </>
  );
};

export default CartWidget;
