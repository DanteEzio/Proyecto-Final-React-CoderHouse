import "./ButtonAdd.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const ButtonAdd = ({ onAdd, count }) => {

  return (
    <>
      <button
        onClick={() => onAdd(count)}
        type="button"
        className="btn btn-success addCarDetail"
      >
        <FontAwesomeIcon icon={faCartShopping} /> Añadir al Carrito
      </button>
    </>
  );
};

export default ButtonAdd;
