import { Container, Form, Nav, Navbar, Offcanvas } from "react-bootstrap";
import LogoNvidia from "./LogoNvidia/LogoNvidia";
import "./StyleNavbar/NavbarStyles.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

// import React, { useState, useEffect } from "react";

export const NavbarNvidia = () => {
  // const [backgroundNav, setBackgroundNav] = useState("light");

  // useEffect(() => {
  //   const handleScroll = () => {

  //     const backgroundNav =
  //       window.scrollY >= 80 ? "rgb(190, 184, 184)" : "light";

  //     setBackgroundNav(backgroundNav);

  //     return() => window.removeEventListener("scroll", handleScroll);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  // }, []);

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
                <NavLink
                  to="/category/Laptops"
                  className={({ isActive }) =>
                    isActive ? "activeCategory" : "inactiveCategory"
                  }
                >
                  Laptops
                </NavLink>
                <NavLink
                  to="/category/Tarjetas Graficas"
                  className={({ isActive }) =>
                    isActive
                      ? "activeCategory mx-lg-3 mx-md-3"
                      : "inactiveCategory mx-lg-3 mx-md-3"
                  }
                >
                  Tarjetas Gráficas
                </NavLink>
                <NavLink
                  to="/category/Monitores"
                  className={({ isActive }) =>
                    isActive ? "activeCategory" : "inactiveCategory"
                  }
                >
                  Monitores G-SYNC
                </NavLink>
              </Nav>
              <Form className="d-flex">
                <CartWidget />
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarNvidia;
