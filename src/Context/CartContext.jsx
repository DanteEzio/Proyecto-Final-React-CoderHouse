import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

//Este es un Componente de Alto Orden y esto quiere decir que recibe a un Componente Hijo por Props
export const CartContextProvider = ({ children }) => {
  //Creamos un estado que nos permitira ser utilizado por nuestro carWidget y por el navbar
  // También inicializamos el useState con un array porque voy a tener mas de un producto
  const [cart, setCart] = useState([]);

  console.log(cart);

  //Esta función se va a encargar de setear el estado con un array ytambién nos va ayudar la parte del spread a no pisar lo que ya teniamos.
  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart([...cart, productToAdd]);
    } else {
      Swal.fire({
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        title: `"${productToAdd.nombre}"\n Ya Esta Agregado al Carrito`,
        icon: "warning",
        background: "rgba(235, 137, 25, 0.726)",
        color: "#eee",
      });
    }
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const removeItem = (id) => {
    const cartWithOutItem = cart.filter((prod) => prod.id !== id);
    setCart(cartWithOutItem);
  };

  return (
    <CartContext.Provider value={{ addItem, removeItem }}>
      {children} //Este sería mi Componente Hijo
    </CartContext.Provider>
  );
};
