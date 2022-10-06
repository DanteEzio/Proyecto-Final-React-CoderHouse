import "./style/ItemDetail.css";

const ItemDetail = ({ product }) => {
  return (
    <div className="containerDetail">
      <div className="container p-5 text-center">
        <div className="row justify-content-md-center g-0">
          <div className="col col-6">
            <img
              src={product.img}
              className="img-fluid productIMGDetail"
              alt="..."
            />
          </div>
          <div className="card col-4 cardDetail">
            <div className="card-body">
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
