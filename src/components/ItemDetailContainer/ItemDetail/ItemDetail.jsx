const ItemDetail = ({ product }) => {
  return (
    <div className="container p-5">
      <div className="row justify-content-md-center">
        <div className="col col-6">
          <img src={product.img} className="img-fluid" alt="..." />
        </div>
        <div className="card col-4">
          <div className="card-body">
            <h5 className="card-title">{product.descripcion}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              SKU - {product.sku}
            </h6>
            <p className="card-text text-end">
              <s>${product.pReal.toLocaleString()} MXN</s>
            </p>
            <p className="card-text text-end">
              ${product.pDescuento.toLocaleString()} MXN
            </p>
            <p className="card-text text-end">
              Disponibles: {product.stock}pzs.
            </p>
            <button type="button" class="btn btn-success justify-content-end">
              Añadir al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
