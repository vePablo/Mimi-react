import { useContext, useState } from "react";
import { CartContext } from "../../../Context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { Link } from "react-router-dom";

const CheckOut = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const [idDelPedido, setIdDelPedido] = useState("");

  const { register, handleSubmit } = useForm();

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: precioTotal(),
    };

    const ref = collection(db, "checkout");

    addDoc(ref, pedido).then((doc) => {
      setIdDelPedido(doc.id);
      vaciarCarrito();
    });
  };

  if(idDelPedido) {
    return (
      <>
      <Link to="../">Volver 🔙</Link>
      <article>
        <div className="Checkout-container">
          <h1>Gracias por tu compra</h1>
          <p>Tu id del pedido es: <span className="Chekout-id">{idDelPedido}</span></p>
        </div>
        <Link to="/productos">Seguir comprando</Link>
      </article>
      </>
    )
  }
  return (
    <>
      <div className="Container">
        <form className="Formulario" onSubmit={handleSubmit(comprar)}>
          <h1>Finalizar Compra</h1>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            {...register("nombre")}
          />
          <input
            type="email"
            placeholder="Ingresa tu e-mail"
            {...register("email")}
          />
          <input
            type="tel"
            placeholder="Ingresa tu teléfono"
            {...register("telefono")}
          />

          <button className="Btn-enviar" type="submit">
            Comprar
          </button>
        </form>
      </div>
    </>
  );
};

export default CheckOut;
