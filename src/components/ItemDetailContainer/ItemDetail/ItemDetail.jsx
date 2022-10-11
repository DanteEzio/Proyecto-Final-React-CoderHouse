import "./style/ItemDetail.css";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import ItemCount from "../../ItemCount/ItemCount";
import ButtonCount from "../../ButtonCount/ButtonCount";
import { useState } from "react";

const ItemDetail = ({
  id,
  nombre,
  img,
  descripcion,
  sku,
  categoria,
  stock,
  pReal,
  pDescuento,
  setCart,
}) => {
  const [quantityToAdd, setQuantityToAdd] = useState(0);
  console.log(quantityToAdd)

  //Esta función me permite guardar lo que va a agregar el usuario al carrito
  const handleOnAdd = (quantity) => {
    console.log("Agregue al carrito: " + quantity);
    // console.log(quantity);
    setQuantityToAdd(quantity);

    setCart(id, nombre, pDescuento, quantity);
  }

  return (
    <div className="containerDetail">
      <div className="container pt-5 pb-5 text-center productDetailC">
        <div className="row justify-content-center g-5">
          <div className="col col-7 imgContainerDetail d-flex align-items-center">
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
                          src={img}
                          className="img-fluid selectIMGDetail"
                          alt="..."
                        />
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">
                        <img
                          src={img}
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
                        src={img}
                        className="img-fluid productIMGDetail"
                        alt="..."
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <img
                        src={img}
                        className="img-fluid productIMGDetail"
                        alt="..."
                      />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
          <div className="card col-4 cardDetail">
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
              <ButtonCount onConfirm={handleOnAdd} stock={stock} />
              {/* <ItemCount onConfirm={handleOnAdd} stock={stock} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
