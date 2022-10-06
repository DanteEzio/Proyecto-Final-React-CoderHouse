import "./style/ItemDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const ItemDetail = ({ product }) => {
  return (
    <div className="containerDetail">
      <div className="container pt-5 pb-5 text-center productDetailC">
        <div className="row justify-content-center g-5">
          <div className="col col-5 imgContainerDetail">
            <img
              src={product.img}
              className="img-fluid productIMGDetail"
              alt="..."
            />
          </div>
          <div className="card col-4 cardDetail">
            <div className="card-body cardBodyDetail">
              <h5 className="card-title descDetail">{product.descripcion}</h5>
              <h6 className="card-subtitle mb-2 text-muted skuDetail">
                SKU - {product.sku}
              </h6>
              <p className="card-text pt-4 pDetail">
                <s>${product.pReal.toLocaleString()} MXN</s>
              </p>
              <p className="card-text pt-4 pDetail">
                ${product.pDescuento.toLocaleString()} MXN
              </p>
              <p className="card-text pt-4 stockDetail">
                Disponibles: {product.stock}pzs.
              </p>
              <table className="table table-borderless d-flex justify-content-center">
                <thead>
                  <tr className="d-flex align-items-center">
                    <th scope="col">
                      <button type="button" class="btn btn-danger">
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                    </th>
                    <th scope="col">1</th>
                    <th scope="col">
                      <button type="button" class="btn btn-success">
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </th>
                  </tr>
                </thead>
              </table>
              <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-success addCarDetail">
                  Añadir al Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
