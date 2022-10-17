import "./InputCount.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import ButtonAdd from "../ButtonAdd/ButtonAdd";

const InputCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleChange = (e) => {
    if (e.target.value <= stock && e.target.value > 0) {
      setCount(e.target.value);
    }
  };

  return (
    <>
      <div className="pb-3 inputCount mx-auto text-center">
        <input
          type="number"
          className="form-control"
          value={count}
          onChange={handleChange}
        />
      </div>
      <div className="d-flex justify-content-center">
        {/* <ButtonAdd onClick={() => onAdd(count)} /> */}
        <button
          onClick={() => onAdd(count)}
          type="button"
          className="btn btn-success addCarDetail"
        >
          <FontAwesomeIcon icon={faCartShopping} /> Añadir al Carrito
        </button>
      </div>
    </>
  );
};

export default InputCount;
