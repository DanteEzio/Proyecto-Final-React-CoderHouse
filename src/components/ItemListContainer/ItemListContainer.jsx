import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { getProducts } from "../Products/AsyncMock";
import ItemList from "./ItemList/ItemList";
import { useParams } from "react-router-dom";
import LoadingWidget from "../LoadingWidget/LoadingWidget";

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
    // console.log(getProducts()) // Comprobamos que nos esta devolviendo nuestra función (en este caso, esta devolviendo una promesa)

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

  // console.log(products)

  if (loading) {
    // return <h1>Loading...</h1>;
    return <LoadingWidget/>
  }

  if (error) {
    return <h1>Hubo un Error</h1>;
  }

  //Transformamos nuestro Array en un Array de Componentes a través del Método Map
  // const productosTransformados = products.map(product => <li key={product.id}>{ product.nombre }</li>)

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
