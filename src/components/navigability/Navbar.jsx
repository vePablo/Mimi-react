
import CarritoWidget from "../products/carrito/CarritoWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav>
        <Link className="logo" to="/">
          <h1>Soy Mimi</h1>
        </Link>
        <div className="navbar-container">
          <ul className="Navbar-links">
            <li>
              <Link to="/" className="navbar-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/item" className="navbar-link">
                Products
              </Link>
            </li>
            <li>
              <Link to="/productos/cuadernos" className="navbar-link">
                Cuadernos
              </Link>
            </li>
            <li>
              <Link to="/productos/remeras" className="navbar-link">
                Remeras
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="navbar-link">
                Contacs
              </Link>
            </li>
            <li>
              <Link to="/login" className="navbar-link">

              </Link>
            </li>
            <li>
              <CarritoWidget />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
