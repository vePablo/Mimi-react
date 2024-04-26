import { Form, Button, Alert, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import ImgLogingBg from '../../../public/img/login-bg.jpeg';
import "./Formulario.css"

const Formulary = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const enviar = (data) => {
    console.log('Enviado', data);
  };

  return (
    <div className="Container">
      <Row>
        <Col>
          <Form className="Formulario" onSubmit={handleSubmit(enviar)}>
            <Form.Group controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Ingresa tu nombre" 
                {...register('nombre', {
                  required: 'Este campo es requerido',
                  minLength: { value: 3, message: 'El nombre debe tener al menos 3 caracteres' }
                })}
              />
              {errors.nombre && <Alert variant="danger">{errors.nombre.message}</Alert>}
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Ingresa tu e-mail" 
                {...register('email', {
                  required: 'Este campo es requerido',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Ingresa un email válido'
                  }
                })}
              />
              {errors.email && <Alert variant="danger">{errors.email.message}</Alert>}
            </Form.Group>

            <Form.Group controlId="formTelefono">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control 
                type="tel" 
                placeholder="Ingresa tu teléfono" 
                {...register('telefono', {
                  required: 'Este campo es requerido',
                  pattern: {
                    value: /^\d{10}$/,
                    message: 'Ingresa un número de teléfono válido'
                  }
                })}
              />
              {errors.telefono && <Alert variant="danger">{errors.telefono.message}</Alert>}
            </Form.Group>

            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Col>
        <Col>
          <img src={ImgLogingBg} alt="Imagen de fondo" className="img-fluid" />
        </Col>
      </Row>
    </div>
  );
};

export default Formulary;
