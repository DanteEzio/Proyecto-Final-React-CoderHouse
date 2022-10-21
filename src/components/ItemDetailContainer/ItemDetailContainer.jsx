import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";
import LoadingWidget from "../LoadingWidget/LoadingWidget";
import { getProductsById } from "../../services/firebase/firestore";

const ItemDetailContainer = ({ setCart }) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  //El hook UseParams() nos permite agarrar los parametros de la URL
  //Desestructutamos para poder traernos nuestro productID
  const { productId } = useParams();

  useEffect(() => {

    getProductsById(productId)
      .then((product) => {
        // console.log(product);
        setProduct(product);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  //   console.log(product);

  if (loading) {
    // return <h1>Cargando...</h1>;
    return <LoadingWidget />;
  }

   if (error) {
     return <h1>Hubo un Error</h1>;
   }

  return (
    <div>
      <ItemDetail {...product} setCart={setCart} />
    </div>
  );
};

export default ItemDetailContainer;
