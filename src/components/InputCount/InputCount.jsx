import "./InputCount.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const InputCount = ({ onConfirm, stock, initial = 1 }) => {
  const [count, setCount] = useState(initial);

  // const handleChange = (e) => {
  //   if (e.target.value <= stock) {
  //     setCount(e.target.value);
  //   }
  // };

  return (
    <>
      <div className="d-flex justify-content-center">
        {/* <input type="number" onChange={handleChange} value={count} /> */}
        <button
          type="button"
          className="btn btn-success addCarDetail"
          onClick={() => onConfirm(count)}
        >
          <FontAwesomeIcon icon={faCartShopping} /> Añadir al Carrito
        </button>
      </div>
    </>
  );
};

export default InputCount;
