import { useContext, useState } from "react";
import { CartContext } from "../../../Context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../../../firebase/config"; // Importa el objeto auth de Firebase
import { Link } from "react-router-dom";

const CheckOut = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const [idDelPedido, setIdDelPedido] = useState("");

  const { register, handleSubmit, formState: { errors } } = useForm();

  const comprar = async (data) => {
    const pedido = {
      cliente: {
        nombre: data.nombre,
        apellido: data.apellido,
        telefono: data.telefono,
        email: auth.currentUser.email // Usa el correo electrónico del usuario autenticado
      },
      productos: carrito,
      total: precioTotal(),
      fecha: new Date().toISOString(),
      estado: "generada"
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), pedido);
      setIdDelPedido(docRef.id);
      vaciarCarrito();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  if(idDelPedido) {
    return (
      <>
      <Link to="../">Volver al inicio</Link>
      <article>
        <div className="Checkout-container">
          <h1>¡Gracias por tu compra!</h1>
          <p>Tu ID de pedido es: <span className="Chekout-id">{idDelPedido}</span></p>
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
          <input type="text" placeholder="Nombre" {...register("nombre", { required: true })} />
          {errors.nombre && <span>Este campo es requerido</span>}
          <input type="text" placeholder="Apellido" {...register("apellido", { required: true })} />
          {errors.apellido && <span>Este campo es requerido</span>}
          <input type="tel" placeholder="Teléfono" {...register("telefono", { required: true })} />
          {errors.telefono && <span>Este campo es requerido</span>}
          <button className="Btn-enviar" type="submit" disabled={carrito.length === 0}>
            Realizar Compra
          </button>
        </form>
      </div>
    </>
  );
};

export default CheckOut;
