import { Container, Form, Nav, Navbar, Offcanvas } from "react-bootstrap";
import LogoNvidia from "./LogoNvidia/LogoNvidia";
import { useState, useEffect, useContext } from "react";
import "./StyleNavbar/NavbarStyles.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import { collection, getDocs, query, orderBy } from "firebase/firestore"; // -> Vamos a traernos los documentos de la coleccion de categorias
import { db } from "../../services/firebase";
import { CartContext } from "../../Context/CartContext";

// import React, { useState, useEffect } from "react";

export const NavbarNvidia = () => {
  const { totalQuantity } = useContext(CartContext);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const collectionRef = query(collection(db, "categories"), orderBy("order"));

    getDocs(collectionRef).then((response) => {
      // console.log(response)
      const categoriesAdapted = response.docs.map((doc) => {
        const data = doc.data();
        return { id: doc.id, ...data };
      });

      setCategories(categoriesAdapted);
    });
  }, []);

  // console.log(categories);

  return (
    <>
      <Navbar
        sticky="top"
        bg="light"
        // bg={backgroundNav}
        expand="md"
        className="navbarCSS"
        // style={{background: backgroundNav}}
      >
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <LogoNvidia />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                <Link to="/">
                  <LogoNvidia />
                </Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="d-flex align-items-center justify-content-start flex-grow-1 linksMenu">
                {categories.map((cat) => (
                  <NavLink
                    key={cat.id}
                    to={`/category/${cat.slug}`}
                    className={({ isActive }) =>
                      isActive ? "activeCategory" : "inactiveCategory"
                    }
                  >
                    {cat.label}
                  </NavLink>
                ))}
                {/* <NavLink
                  to="/category/laptops"
                  className={({ isActive }) =>
                    isActive ? "activeCategory" : "inactiveCategory"
                  }
                >
                  Laptops
                </NavLink>
                <NavLink
                  to="/category/tarjetas-graficas"
                  className={({ isActive }) =>
                    isActive
                      ? "activeCategory mx-lg-3 mx-md-3"
                      : "inactiveCategory mx-lg-3 mx-md-3"
                  }
                >
                  Tarjetas Gráficas
                </NavLink>
                <NavLink
                  to="/category/monitores"
                  className={({ isActive }) =>
                    isActive ? "activeCategory" : "inactiveCategory"
                  }
                >
                  Monitores G-SYNC
                </NavLink> */}
              </Nav>
              <Form className="d-flex">
                {totalQuantity === 0 ? (
                  <CartWidget />
                ) : (
                  <Link to="/Cart">
                    <CartWidget />
                  </Link>
                )}
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarNvidia;
