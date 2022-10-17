import { useState, useEffect } from "react";
// import { getProduct } from "../Products/AsyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";
import LoadingWidget from "../LoadingWidget/LoadingWidget";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase";

const ItemDetailContainer = ({ setCart }) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  //El hook UseParams() nos permite agarrar los parametros de la URL
  //Desestructutamos para poder traernos nuestro productID
  const { productId } = useParams();

  useEffect(() => {
    const docRef = doc(db, "products", productId);
    // console.log(docRef)

    getDoc(docRef)
      .then((doc) => {
        const data = doc.data();

        const productAdapted = { id: doc.id, ...data };

        setProduct(productAdapted)
      })
      .finally(() => {
        setLoading(false);
      });

    // getProduct(parseInt(productId))
    //   .then((response) => {
    //     setProduct(response);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
  }, []);
  //   console.log(product);

  if (loading) {
    // return <h1>Cargando...</h1>;
    return <LoadingWidget />;
  }

  return (
    <div>
      <ItemDetail {...product} setCart={setCart} />
    </div>
  );
};

export default ItemDetailContainer;
