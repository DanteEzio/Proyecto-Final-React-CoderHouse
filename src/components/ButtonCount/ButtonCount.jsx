import "./ButtonCount.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const ButtonCount = ({ onConfirm, stock, initial = 1 }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock || count >= 0) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <table className="table table-borderless d-flex justify-content-center">
        <thead>
          <tr className="d-flex align-items-center">
            <th scope="col">
              <button
                onClick={decrement}
                type="button"
                className="btn btn-danger iCount btn-sm"
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
            </th>
            <th className="countDetail" scope="col">
              {count}
            </th>
            <th scope="col">
              <button
                onClick={increment}
                type="button"
                className="btn btn-success btn-sm"
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </th>
          </tr>
        </thead>
      </table>
    </>
  );
};

export default ButtonCount;
