import { createContext, useState, useEffect } from "react";
// import Swal from "sweetalert2";

export const CartContext = createContext();

//Este es un Componente de Alto Orden y esto quiere decir que recibe a un Componente Hijo por Props
export const CartContextProvider = ({ children }) => {
  //Creamos un estado que nos permitira ser utilizado por nuestro carWidget y por el navbar
  // También inicializamos el useState con un array porque voy a tener mas de un producto
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0); // Número total de prod en el carrito
  const [totalPrice, setTotalPrice] = useState(0); // Precio total de los prod en el carrito
  const [productTotalPrice, setProductTotalPrice] = useState(0); //

  console.log(cart);

  //Esta función se va a encargar de setear el estado con un array y también nos va ayudar la parte del spread a no pisar lo que ya teniamos.
  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart([...cart, productToAdd]);
    } else {
      const carUpdated = cart.map((prod) => {
        if (prod.id === productToAdd.id) {
          const productUpdated = {
            ...prod,
            quantity: productToAdd.quantity,
          };
          return productUpdated; //Si es igual retorno el producto actualizado
        } else {
          return prod; // En caso contrario retorno el mismo producto
        }
      });
      setCart(carUpdated);
    }
  };

  //Esta función nos indica si hay un producto agregado al carrito de compras
  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  //Esta función nos ayuda a eliminar un producto de nuestro carrito
  const removeItem = (id) => {
    const cartWithOutItem = cart.filter((prod) => prod.id !== id);
    setCart(cartWithOutItem);
  };

  // ************************************************

  //Esta función me permite conocer el número total de productos agregados al carrito
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

  // ************************************************

  // useEffect(() => {
  //   const productTotalQuantity = getProductTotalQuantity();
  //   setProductTotalQuantity(productTotalQuantity);
  // }, [cart]);

  // const getProductTotalQuantity = (id) => {
  //   // const cartWithOutItem = cart.filter((prod) => prod.id !== id);

  //   let productTotalQuantity = 0; //Contador

  //   cart.forEach((prod) => {
  //     if (prod.id === id) {
  //       productTotalQuantity += prod.quantity;
  //     }
  //   });

  //   return productTotalQuantity;
  // };

  // ************************************************

  //Esta funcion me permite ver en tiempo real la cantidad agregada que tenemos en el carrito
  const getProductQuantity = (id) => {
    const product = cart.find((prod) => prod.id === id);

    return product?.quantity;
  };

  // ************************************************

  //Esta función me permite saber el precio total de de la suma de todos los productos

  useEffect(() => {
    const totalPrice = getTotalPrice();
    setTotalPrice(totalPrice);
  }, [cart]);

  const getTotalPrice = () => {
    let totalPrice = 0; //Contador

    cart.forEach((prod) => {
      totalPrice += prod.quantity * prod.pDescuento;
    });

    return totalPrice;
  };

  // ************************************************

  //Esta función me permite saber el costo total de cada producto dependiendo del número de unidades elegidas

  useEffect(() => {
    const productTotalPrice = getProductTotalPrice();
    setProductTotalPrice(productTotalPrice);
  }, [cart]);

  const getProductTotalPrice = (id) => {
    // const cartWithOutItem = cart.filter((prod) => prod.id !== id);

    let productTotalPrice = 0; //Contador

    cart.forEach((prod) => {
      if (prod.id === id) {
        productTotalPrice += prod.quantity * prod.pDescuento;
      }
    });

    return productTotalPrice;
  };

  // ************************************************

  // Esta función me permite Limpiar el carrito de compras
  const clearCart = () => {
    setCart([]);
  };

  // ************************************************

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        totalQuantity,
        getProductQuantity,
        totalPrice,
        clearCart,
        getProductTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
