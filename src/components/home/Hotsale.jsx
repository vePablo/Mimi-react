import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase/config";
import { getDocs,collection } from 'firebase/firestore';
import { Container } from "react-bootstrap";

export const Hotsale = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const productosSnapshot = await getDocs(collection(db, "mimi-react"));
        const productosData = productosSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(productosData);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

    obtenerProductos();
  }, []);

  const filtrarProductosPorCategoria = (categoria) => {
    return productos
      .filter((producto) => producto.category === categoria && producto.stock > 5)
      .slice(0, 3); 
  };

  return (
    <>
      <Container>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Tarjetas */}
          <div className="carousel-item active">
            <div className="cards-wrapper">
              {filtrarProductosPorCategoria("tarjetas").map((producto) => (
                <div className="card" key={producto.id}>
                  <img src={producto.image} className="card-img-top" alt={producto.title} />
                  <div className="card-body">
                    <h5 className="card-title">{producto.title}</h5>
                    <p className="card-text">{producto.description}</p>
                    <Link to={`/productos/${producto.category}`} className="btn btn-primary">
                      Leer más!
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Remeras */}
          <div className="carousel-item">
            <div className="cards-wrapper">
              {filtrarProductosPorCategoria("remeras").map((producto) => (
                <div className="card" key={producto.id}>
                  <img src={producto.image} className="card-img-top" alt={producto.title} />
                  <div className="card-body">
                    <h5 className="card-title">{producto.title}</h5>
                    <p className="card-text">{producto.description}</p>
                    <Link to={`/productos/${producto.category}`} className="btn btn-primary">
                      Leer más!
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Cuadernos */}
          <div className="carousel-item">
            <div className="cards-wrapper">
              {filtrarProductosPorCategoria("cuadernos").map((producto) => (
                <div className="card" key={producto.id}>
                  <img src={producto.image} className="card-img-top" alt={producto.title} />
                  <div className="card-body">
                    <h5 className="card-title">{producto.title}</h5>
                    <p className="card-text">{producto.description}</p>
                    <Link to={`/productos/${producto.category}`} className="btn btn-primary">
                      Leer más!
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
      </Container>
    </>
  );
};
