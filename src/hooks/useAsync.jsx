import { useEffect, useState } from "react";

export const useAsync = (asyncFunc, dependencies= []) => {
  //Creamos un estado para poder guardar nuestros productos
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  //Aqui estamos validando si dependencies es un array
    if (!Array.isArray(dependencies)) {
        dependencies = []
    }
  
  useEffect(() => {
    setLoading(true);

    asyncFunc()
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
    //Le indicamos que esta parte se tiene que ejecutar despues de que nuestro componente sea montado en pantalla y esto lo hacemos con []
  }, dependencies); //Aqui le estamos diciendo que si el valor cambia vuelva a hacer la llamada

    return {
        data,
        loading,
        error
    }
};
