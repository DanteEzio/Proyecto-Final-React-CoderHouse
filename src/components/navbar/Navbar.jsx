import { Container, Form, Nav, Navbar, Offcanvas } from "react-bootstrap";
import LogoNvidia from "./LogoNvidia/LogoNvidia";
import "./StyleNavbar/NavbarStyles.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

import React from "react";

export const NavbarNvidia = () => {
  return (
    <>
      <Navbar bg="light" variant="light" expand="md" className="navbarCSS">
        <Container>
          <Navbar.Brand href="#">
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
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-start flex-grow-1 pe-3 linksMenu">
                <Nav.Link href="#action1">Laptops</Nav.Link>
                <Nav.Link href="#action2">Tarjetas Gráficas</Nav.Link>
                <Nav.Link href="#action3">Monitores G-SYNC</Nav.Link>
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
