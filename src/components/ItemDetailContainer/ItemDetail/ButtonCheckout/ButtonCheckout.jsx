import "./ButtonCheckout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ButtonCheckout = () => {
  return (
    <>
      <div>
        <Link to="/checkout" className="buttonCartDetail mx-auto">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Finalizar Compra <FontAwesomeIcon icon={faCircleCheck} />
        </Link>
      </div>
    </>
  );
};

export default ButtonCheckout;