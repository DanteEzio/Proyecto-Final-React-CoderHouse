import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarNvidia from "./components/navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
//Routes nos ayuda a indicar los componentes que se van a mostrar de forma condicional
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { CartContextProvider } from "./Context/CartContext";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

//Sirve ":" sirve para indicar que habrá un valor dinámico y en compañia de "productId" esta será la variable que estara cambiando de manera dinamica

// export const CartContext = createContext();

function App() {
  // const [page, setPage] = useState("list");

  return (
    <>
      {/* <Context.Provider value={"Valor a compartir"}> */}
      {/* <CartContext.Provider value={{ addItem, removeItem }}> */}
      <CartContextProvider>
        <BrowserRouter>
          <NavbarNvidia />
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer welcomePage={"Selecciona tu Producto"} />
              }
            />
            <Route
              path="/category/:categoryId"
              element={
                <ItemListContainer welcomePage={"Selecciona tu Producto"} />
              }
            />

            <Route
              path="/detail/:productId"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route
              path="*"
              element={<PageNotFound message="Página No Encontrada" />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
      {/* </CartContext.Provider> */}
      {/* </Context.Provider> */}
    </>
  );
}

export default App;
