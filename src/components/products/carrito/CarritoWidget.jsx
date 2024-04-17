import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";
import { Badge } from "react-bootstrap";

const CarritoWidget = () => {
    const { cantidadEnCarrito } = useContext(CartContext);

    return (
        <Link to="/carrito" className="nav-link">
            Carrito <Badge bg="secondary">{cantidadEnCarrito()}</Badge>
        </Link>
    );
};

export default CarritoWidget;
