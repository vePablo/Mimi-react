import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../../Context/CartContext";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/config"; 
import "./Carrito.css";

const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito, eliminarDelCarrito, setVengoDelCarrito } =
    useContext(CartContext);
  const navigate = useNavigate();
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(false); 

  useEffect(() => {
    
    const verificarAutenticacion = () => {
      const usuarioActual = auth.currentUser; 
      setUsuarioAutenticado(usuarioActual !== null); 
    };

    const unsubscribe = auth.onAuthStateChanged(verificarAutenticacion);

    return () => unsubscribe();
  }, []);

  const handleVaciar = () => {
    vaciarCarrito();
  };

  const handleComprar = () => {
    if (usuarioAutenticado) {
      navigate("/checkout");
    } else {
      setVengoDelCarrito(true); 
      navigate("/login");
    }
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
                  <Button
                    variant="danger"
                    onClick={() => eliminarDelCarrito(prod.id)}
                  >
                    Eliminar
                  </Button>
                </div>
              </div>
            ))}
            <div className="carrito-total">
              <h3>Precio total: ${precioTotal()}</h3>
              <Button variant="danger" onClick={handleVaciar}>
                Vaciar carrito
              </Button>{" "}
              <Button variant="boton-info"  onClick={handleComprar}>
                Comprar
              </Button>
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
