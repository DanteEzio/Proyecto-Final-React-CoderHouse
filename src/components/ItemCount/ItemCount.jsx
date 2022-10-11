import "./ItemCount.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const ItemCount = ({stock=0, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  // const handleChange = (e) => {
  //     if (e.target.value <= productStock) {
  //         setCount(e.target.value)
  //     }
  // }

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
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
    if (quantity > 1) {
      setQuantity(quantity - 1);
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
              {quantity}
              {/* <input type="number" onChange={handleChange} className="form-control" value={count} /> */}
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
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-success addCarDetail"
          onClick={() => onAdd(quantity)}
        >
          <FontAwesomeIcon icon={faCartShopping} /> Añadir al Carrito
        </button>
      </div>
    </>
  );
};

export default ItemCount;
