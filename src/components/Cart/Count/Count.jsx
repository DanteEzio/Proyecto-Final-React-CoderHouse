import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../Context/CartContext";

const Count = ({ stock }) => {
const { cart, totalQuantity, totalPrice, removeItem } = useContext(CartContext);

const [count, setCount] = useState(initial);

const increment = () => {
  if (count < stock) {
    setCount(count + 1);
  } else {
    Swal.fire({
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      title: `Solo Contamos con ${stock}pzs Disponibles`,
      icon: "warning",
      background: "rgba(235, 137, 25, 0.726)",
      color: "#eee",
    });
  }
};

const decrement = () => {
  if (count > 1) {
    setCount(count - 1);
  }
};



  return (
    <>
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
    </>
  );
};

export default Count;
