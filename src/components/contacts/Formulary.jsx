import { useForm } from "react-hook-form";
import { Form, Button, Alert } from "react-bootstrap";
import ImgLogingBg from "../../../public/img/login-bg.jpeg";
import "./Formulario.css"

const Formulary = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const enviar = (data) => {
    console.log("Enviado", data);
  };

  return (
    <section className="light">
      <div className="container">
        <div className="h1">Trabaja con nosotros</div>
        <article className="postcard light blue">
          <figure className="postcard__img_link">
            <img
              src={ImgLogingBg}
              alt="Imagen de fondo"
              className="postcard__img"
            />
          </figure>
          <div className="postcard__text t-dark">
            <div className="postcard__title blue">
              <h1>Formulario</h1>
            </div>
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt">
              <Form className="Formulario blue" onSubmit={handleSubmit(enviar)}>
                <Form.Group controlId="formNombre">
                  <h3>Comunícate con nosotros para trabajos personalizados</h3>
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingresa tu nombre"
                    {...register("nombre", {
                      required: "Este campo es requerido",
                      minLength: {
                        value: 3,
                        message: "El nombre debe tener al menos 3 caracteres",
                      },
                    })}
                  />
                  {errors.nombre && (
                    <Alert variant="danger">{errors.nombre.message}</Alert>
                  )}
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingresa tu e-mail"
                    {...register("email", {
                      required: "Este campo es requerido",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Ingresa un email válido",
                      },
                    })}
                  />
                  {errors.email && (
                    <Alert variant="danger">{errors.email.message}</Alert>
                  )}
                </Form.Group>

                <Form.Group controlId="formTelefono">
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Ingresa tu teléfono"
                    {...register("telefono", {
                      required: "Este campo es requerido",
                      pattern: {
                        value: /^\d{10}$/,
                        message: "Ingresa un número de teléfono válido",
                      },
                    })}
                  />
                  {errors.telefono && (
                    <Alert variant="danger">{errors.telefono.message}</Alert>
                  )}
                </Form.Group>

                <Button variant="primary" type="submit">
                  Enviar
                </Button>
              </Form>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Formulary;
