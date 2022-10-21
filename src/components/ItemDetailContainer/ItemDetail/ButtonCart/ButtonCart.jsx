import "./ButtonCart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ButtonCart = () => {
  return (
    <>
      <div>
        <Link to="/cart" className="buttonCartDetail mx-auto">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Finalizar Compra <FontAwesomeIcon icon={faCircleCheck} />
        </Link>
      </div>
    </>
  );
}

export default ButtonCart