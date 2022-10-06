import { useState, useEffect } from "react";
import { getProduct } from "../Products/AsyncMock";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  //El hook UseParams() nos permite agarrar los parametros de la URL
  //Desestructutamos para poder traernos nuestro productID
  const { productId } = useParams();

  useEffect(() => {
    getProduct(parseInt(productId))
      .then((response) => {
        setProduct(response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
//   console.log(product);

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  return (
    <div>
      <h1>Detalle de Producto</h1>
      {/* <itemDetail {...product} /> */}
      <div>{product.nombre}</div>
    </div>
  );
};

export default ItemDetailContainer;
