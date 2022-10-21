import "./ButtonCart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck
} from "@fortawesome/free-solid-svg-icons";

const ButtonCart = () => {
  return (
    <>
      <div>
        <a className="buttonCartDetail mx-auto">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Finalizar Compra <FontAwesomeIcon icon={faCircleCheck} />
        </a>
      </div>
    </>
  );
}

export default ButtonCart