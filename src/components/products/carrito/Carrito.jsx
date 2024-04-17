import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Carrito.css";

const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito, eliminarDelCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  };

  return (
    <section className="container carrito-section">
      <div className="carrito-container">
        <h2>Tu carrito</h2>
        {carrito.length > 0 ? (
          <div>
            {carrito.map((prod) => (
              <div key={prod.id} className="producto">
                <div className="producto-info">
                  <h3>{prod.title}</h3>
                  <p>Precio: ${prod.price}</p>
                  <p>Cantidad: {prod.cantidad}</p>
                  <p>Total: ${prod.price * prod.cantidad}</p>
                <Button variant="danger" onClick={() => eliminarDelCarrito(prod.id)}>Eliminar</Button>
                </div>
              </div>
            ))}
            <div className="carrito-total">
              <h3>Precio total: ${precioTotal()}</h3>
              <Button variant="danger" onClick={handleVaciar}>Vaciar carrito</Button>{' '}
              <Button variant=" boton-info"><Link to="/checkout">Comprar</Link></Button>
            </div>
          </div>
        ) : (
          <h3>El carrito está vacío</h3>
        )}
      </div>
    </section>
  );
};

export default Carrito;
