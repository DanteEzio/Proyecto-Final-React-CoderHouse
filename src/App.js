import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarNvidia from "./components/navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
// import { useState } from "react";
//Routes nos ayuda a indicar los componentes que se van a mostrar de forma condicional
import {BrowserRouter, Routes, Route} from "react-router-dom";

//Sirve ":" sirve para indicar que habrá un valor dinámico y en compañia de "productId" esta será la variable que estara cambiando de manera dinamica

function App() {
  // const [page, setPage] = useState("list");

  return (
    <>
      {/* {page === "list" && (
        <ItemListContainer welcomePage={"Selecciona tu Producto"} />
      )}
      {page === "detail" && <ItemDetailContainer />} */}
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
          
          <Route path="/detail/:productId" element={<ItemDetailContainer />} />
          <Route path='*' element={ <h1>404 Not Found</h1> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
