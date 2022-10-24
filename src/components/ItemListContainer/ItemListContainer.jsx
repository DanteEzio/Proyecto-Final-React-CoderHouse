import "./ItemListContainer.css";
// import { useState, useEffect } from "react";
import ItemList from "./ItemList/ItemList";
import { useParams } from "react-router-dom";
import LoadingWidget from "../LoadingWidget/LoadingWidget";
import { getProducts } from "../../services/firebase/firestore";
import { useAsync } from "../../hooks/useAsync";

// Aquí estamos recibiendo el Saludo de la Página por props
export const ItemListContainer = ({ welcomePage }) => {
  // //Creamos un estado para poder guardar nuestros productos
  // const [products, setProducts] = useState([]);
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(true);

  // const { categoryId } = useParams();

  // // console.log(categoryId);

  // //Con useEffect podemos controlar las etapas del ciclo de vida
  // useEffect(() => {
  //   setLoading(true);

  //   getProducts(categoryId)
  //     .then((products) => {
  //       setProducts(products);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setError(true);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  //   //Le indicamos que esta parte se tiene que ejecutar despues de que nuestro componente sea montado en pantalla y esto lo hacemos con []
  // }, [categoryId]); //Aqui le estamos diciendo que si el valor cambia vuelva a hacer la llamada

  // Nuestro componente ItemListContainer trae los parametros de la URL, hace una llamada asincrona y trae los productos. Finalmente, la respuesta la lista

  const { categoryId } = useParams();

  // *** Mandamos a llamar nuestro "CustomHook" ***
  // Le pasamos una función de call back, es decir una funcion que se va a ejecutar adentro despues de ejecutar determinado codigo
  const { data: products, error, loading } = useAsync(() => getProducts(categoryId), [categoryId]);


  if (loading) {
    // return <h1>Loading...</h1>;
    return <LoadingWidget />;
  }

  if (error) {
    return <h1>Hubo un Error</h1>;
  }

  return (
    <>
      <div className="ItemListContainer">
        <h1 className="TituloPrincipal">{welcomePage}</h1>
        <ItemList products={products} />
      </div>
    </>
  );
};

export default ItemListContainer;
