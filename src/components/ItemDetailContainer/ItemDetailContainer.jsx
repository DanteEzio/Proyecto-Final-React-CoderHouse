// import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";
import LoadingWidget from "../LoadingWidget/LoadingWidget";
import { getProductsById } from "../../services/firebase/firestore";
import { useAsync } from "../../hooks/useAsync";

const ItemDetailContainer = ({ setCart }) => {
  // const [product, setProduct] = useState({});
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);

  // //El hook UseParams() nos permite agarrar los parametros de la URL
  // //Desestructutamos para poder traernos nuestro productID
  // const { productId } = useParams();

  // useEffect(() => {

  //   getProductsById(productId)
  //     .then((product) => {
  //       // console.log(product);
  //       setProduct(product);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setError(true);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);
  //   console.log(product);


  // *** Nuestro componente ItemListContainer trae los parametros de la URL, hace una llamada asincrona y trae el producto seleccionado. Finalmente, la respuesta la lista ***

  const { productId } = useParams();

  // *** Mandamos a llamar nuestro "CustomHook" ***
  // Le pasamos una función de call back, es decir una funcion que se va a ejecutar adentro despues de ejecutar determinado codigo
  const {
    data: product,
    error,
    loading,
  } = useAsync(() => getProductsById(productId), []);

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
