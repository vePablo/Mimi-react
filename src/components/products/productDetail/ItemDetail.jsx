/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { CartContext } from "../../../Context/CartContext";
import { Link } from "react-router-dom";
import { Image, Container, Row, Col, Button } from "react-bootstrap";
import "./ItemDetail.css"; // Importa el archivo CSS para los estilos adicionales
import { Hotsale } from "../../home/Hotsale";
import BannerSeparador from "../../home/BannerSeparador";

const ItemDetail = ({ item }) => {
  const { agregarAlCarrito } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);

  const handleRes = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleSum = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  };

  return (
    <>
    <Container className="item-detail-container">
      <Link to="../" className="back-link">Volver</Link>
      <Row className="item-detail-row">
        <Col md={6}>
          <Image src={item.image} alt={item.title} fluid className="item-image" />
        </Col>
        <Col md={6}>
          <h2 className="item-title">{item.title}</h2>
          <p className="item-description">{item.description}</p>
          <p className="item-price">Price: ${item.price}</p>
          <p className="item-stock">Stock: {item.stock}</p>
          <p className="item-category">Category: {item.category}</p>
          <div className="quantity-controls">
            <Button variant="light" onClick={handleRes}>-</Button>
            <span className="quantity">{cantidad}</span>
            <Button variant="light" onClick={handleSum}>+</Button>
          </div>
          <Button variant="primary" onClick={() => agregarAlCarrito(item, cantidad)}>
            Agregar al carrito
          </Button>
        </Col>
      </Row>
    </Container>
    <BannerSeparador  />
    <Hotsale  />
    </>
  );
};

export default ItemDetail;
