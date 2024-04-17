import { useForm } from 'react-hook-form';

const Formulary = () => {
  const { register, handleSubmit } = useForm(); 

  const enviar = (data) => { 
    console.log('Enviado', data); 
  };

  return (
    <div className="Container">
      <form className="Formulario" onSubmit={handleSubmit(enviar)}>
        
        <input type="text" placeholder="Ingresa tu nombre" {...register('nombre')} />
        <input type="email" placeholder="Ingresa tu e-mail" {...register('email')} />
        <input type="tel" placeholder="Ingresa tu teléfono" {...register('telefono')} />
        
        <button className="Btn-enviar" type="submit">Enviar</button>
      </form>
    </div>
  );
};



export default Formulary;