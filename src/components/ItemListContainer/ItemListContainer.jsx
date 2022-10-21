import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "./ItemList/ItemList";
import { useParams } from "react-router-dom";
import LoadingWidget from "../LoadingWidget/LoadingWidget";
import { getProducts } from "../../services/firebase/firestore";

// Aquí estamos recibiendo el Saludo de la Página por props
export const ItemListContainer = ({ welcomePage }) => {
  //Creamos un estado para poder guardar nuestros productos
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  // console.log(categoryId);

  //Con useEffect podemos controlar las etapas del ciclo de vida
  useEffect(() => {
    setLoading(true);

    getProducts(categoryId)
      .then((products) => {
        setProducts(products);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
    //Le indicamos que esta parte se tiene que ejecutar despues de que nuestro componente sea montado en pantalla y esto lo hacemos con []
  }, [categoryId]); //Aqui le estamos diciendo que si el valor cambia vuelva a hacer la llamada


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
