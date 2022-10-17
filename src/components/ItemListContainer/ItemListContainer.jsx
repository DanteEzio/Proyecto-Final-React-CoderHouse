import "./ItemListContainer.css";
import { useState, useEffect } from "react";
// import { getProducts } from "../Products/AsyncMock";
import ItemList from "./ItemList/ItemList";
import { useParams } from "react-router-dom";
import LoadingWidget from "../LoadingWidget/LoadingWidget";
import { getDocs, query, where, orderBy } from "firebase/firestore"; // -> Esta función nos va a permitir poder consultar todos nuestros productos
import { db } from "../../services/firebase"; // -> Recuperamos la direccion de nuestra BD
import { collection } from "firebase/firestore"; //de que coleccion de mi bd debo traer los datos, con esta funcion creo toda la referencia completa de los datos que quiero obtener
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

    setLoading(true);

    // const collectionRef = collection(db, "productsList");

    //Generamos nuestra consulta para poder filtrar
    // Si tengo "categoryId" acepta consultas, en caso contrario muestrame todos los productos
    const collectionRef = categoryId
      ? query(
          collection(db, "products"),
          where("categoria", "==", categoryId)
        )
      : query(collection(db, "products"), orderBy("id"));

    getDocs(collectionRef)
      .then((response) => {
        console.log(response); // -> La respuesta a los documento es un Array por lo tanto lo tenemos que adaptar a lo que nosotros queremos mostrar

        // Adaptamos lo que tenemos en response docs, para transformar el Array usamos el metodo "map" -> Con cada documento
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          console.log(data);
          return { id: doc.id, ...data }; // -> Recuperamos el id ya que este se encuentra un nivel mas arriba y hacemos el spread
        });

        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });

    // getProducts(categoryId)
    // .then((products) => {
    //   setProducts(products);
    // })
    // .catch((error) => {
    //   console.log(error);
    //   setError(true);
    // })
    // .finally(() => {
    //   setLoading(false);
    // });
    //Le indicamos que esta parte se tiene que ejecutar despues de que nuestro componente sea montado en pantalla y esto lo hacemos con []
  }, [categoryId]); //Aqui le estamos diciendo que si el valor cambia vuelva a hacer la llamada

  // console.log(products)

  if (loading) {
    // return <h1>Loading...</h1>;
    return <LoadingWidget />;
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
