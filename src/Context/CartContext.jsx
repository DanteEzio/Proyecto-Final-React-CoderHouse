import { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

//Este es un Componente de Alto Orden y esto quiere decir que recibe a un Componente Hijo por Props
export const CartContextProvider = ({ children }) => {
  //Creamos un estado que nos permitira ser utilizado por nuestro carWidget y por el navbar
  // También inicializamos el useState con un array porque voy a tener mas de un producto
    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0)

  console.log(cart);

  //Esta función se va a encargar de setear el estado con un array ytambién nos va ayudar la parte del spread a no pisar lo que ya teniamos.
  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart([...cart, productToAdd]);
    } else {
      const carUpdated = cart.map(prod => {
        if (prod.id === productToAdd.id) {
          const productUpdated = {
            ...prod,
            quantity: productToAdd.quantity,
          };
          return productUpdated; //Si es igual retorno el producto actualizado
        } else {
          return prod // En caso contrario retorno el mismo producto
        }
      })
      setCart(carUpdated);
      // Swal.fire({
      //   showConfirmButton: false,
      //   timer: 3000,
      //   timerProgressBar: true,
      //   title: `"${productToAdd.nombre}"\n Ya Esta Agregado al Carrito`,
      //   icon: "warning",
      //   background: "rgba(235, 137, 25, 0.726)",
      //   color: "#eee",
      // });
    }
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const removeItem = (id) => {
    const cartWithOutItem = cart.filter((prod) => prod.id !== id);
    setCart(cartWithOutItem);
  };

  useEffect(() => {
      const totalQuantity = getTotalQuantity();
      setTotalQuantity(totalQuantity);
  }, [cart]);

  const getTotalQuantity = () => {
    let totalQuantity = 0; //Contador

    cart.forEach((prod) => {
      totalQuantity += prod.quantity;
    });

    return totalQuantity;
  };

  //Esta funcion me permite ver en tiempo real la cantidad agregada que tenemos en el carrito
  const getProductQuantity = (id) => {
    const product = cart.find(prod => prod.id === id);

    return product?.quantity
  }

  return (
    <CartContext.Provider value={{cart, addItem, removeItem, totalQuantity, getProductQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
