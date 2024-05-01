import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import ImagenLogin from "../../../public/img/login-bg.jpeg";
import "./Login.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from "../../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { CartContext } from "../../Context/CartContext";

const Login = () => {
  const [registrado, setRegistrado] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  

  // Obtener el contexto del carrito
  const { vengoDelCarrito } = useContext(CartContext);

  const autenticacion = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const pw = e.target.password.value;
    try {
      if (registrado) {
        await createUserWithEmailAndPassword(auth, correo, pw);
        // Redirigir a checkout si vengo del carrito
        if (vengoDelCarrito) {
          navigate('/checkout');
        } else {
          navigate('/');
        }
      } else {
        await signInWithEmailAndPassword(auth, correo, pw);
        // Redirigir a checkout si vengo del carrito
        if (vengoDelCarrito) {
          navigate('/checkout');
        } else {
          navigate('/');
        }
      }
    } catch (error) {
      setError(error.message);
      toast.error("¡Error al iniciar sesión!");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="Container mt-4">
        <div className="row">
          <div className="col-md-6 body mt-4">
            <div className="card-body body">
              <form onSubmit={autenticacion}>
                <h5>Bienvenido</h5>
                <div className="mt-4">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Coloca tu Email"
                    autoComplete="email"
                    required
                  />
                  <div id="emailHelp" className="form-text">
                    Ingresa tu correo electrónico.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Coloca tu Password"
                    required
                    autoComplete="current-password"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  {registrado ? "Registrarse" : "Iniciar Sesión"}
                </button>
                {error && <p className="text-danger mt-2">{error}</p>}
              </form>
              <h5 className="mt-2">
                {registrado ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}{" "}
                <button
                  onClick={() => setRegistrado(!registrado)}
                  type="submit"
                  className="btn btn-primary"
                >
                  {registrado ? "Iniciar Sesión" : "Registrarse"}
                </button>
              </h5>
            </div>
          </div>
          <div className="col-md-6 ">
            <figure>
              <img
                className="img-fluid bg"
                src={ImagenLogin}
                alt="Imagen de login"
              />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
