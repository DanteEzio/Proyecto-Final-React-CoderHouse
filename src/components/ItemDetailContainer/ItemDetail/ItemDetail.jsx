import "./style/ItemDetail.css";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
// import InputCount from "../../InputCount/InputCount";
import ButtonCount from "../../ButtonCount/ButtonCount";
import { useState, useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import Swal from "sweetalert2";
import ButtonCart from "./ButtonCart/ButtonCart";

const ItemDetail = ({
  id,
  nombre,
  img,
  img2,
  img3,
  img4,
  descripcion,
  sku,
  categoria,
  stock,
  pReal,
  pDescuento,
}) => {
  const [quantityToAdd, setQuantityToAdd] = useState(0);
  console.log(quantityToAdd);

  const { addItem, getProductQuantity } = useContext(CartContext);

  //Esta función me permite guardar lo que va a agregar el usuario al carrito
  const handleOnAdd = (quantity) => {
    // console.log("Agregue al carrito: " + quantity);
    // console.log(quantity);
    setQuantityToAdd(quantity);

    //Guardamos un Objeto con los siguientes parametros
    // setCart([{id, nombre, pDescuento, quantity}]);

    const productToAdd = {
      id,
      nombre,
      pDescuento,
      quantity,
      img,
      stock,
    };

    addItem(productToAdd);

    Swal.fire({
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      title: `"${nombre}" Se Agrego Correctamente al Carrito`,
      icon: "success",
      confirmButtonColor: "#76b900",
      background: "#1a1a1ad2",
      backdrop: "#75b90030",
      color: "#eee",
    });
  };

  const productAddedQuantity = getProductQuantity(id);

  return (
    <div className="containerDetail">
      <div className="container pt-5 pb-5 text-center productDetailC">
        <div className="row justify-content-center g-5">
          <div className="col col-lg-6 col-md-12 col-11 imgContainerDetail d-flex align-items-center justify-content-center">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">
                        <img
                          src={img}
                          className="img-fluid selectIMGDetail"
                          alt="..."
                        />
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">
                        <img
                          src={img2}
                          className="img-fluid selectIMGDetail"
                          alt="..."
                        />
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">
                        <img
                          src={img3}
                          className="img-fluid selectIMGDetail"
                          alt="..."
                        />
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">
                        <img
                          src={img4}
                          className="img-fluid selectIMGDetail"
                          alt="..."
                        />
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <img
                        src={img}
                        className="img-fluid productIMGDetail"
                        alt="..."
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <img
                        src={img2}
                        className="img-fluid productIMGDetail"
                        alt="..."
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <img
                        src={img3}
                        className="img-fluid productIMGDetail"
                        alt="..."
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <img
                        src={img4}
                        className="img-fluid productIMGDetail"
                        alt="..."
                      />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
          <div className="card col-lg-4 col-md-11 col-10 cardDetail">
            <div className="card-body cardBodyDetail">
              <h5 className="card-title descDetail">{descripcion}</h5>
              <h6 className="card-subtitle mb-2 text-muted skuDetail">
                SKU - {sku}
              </h6>
              <p className="card-text mb-2 text-muted categoryDetail">
                Categoria: {categoria}
              </p>
              <p className="card-text pt-4 pDetail">
                <s>${pReal.toLocaleString()} MXN</s>
              </p>
              <p className="card-text pt-4 pDetail">
                ${pDescuento.toLocaleString()} MXN
              </p>
              <p className="card-text pt-4 stockDetail">
                Disponibles: {stock}pzs.
              </p>
              {quantityToAdd === 0 ? (
                <ButtonCount
                  onAdd={handleOnAdd}
                  stock={stock}
                  initial={productAddedQuantity}
                />
              ) : (
                <ButtonCart />
              )}
              {/* <InputCount
                onAdd={handleOnAdd}
                stock={stock}
                initial={productAddedQuantity}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
