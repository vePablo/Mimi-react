/* eslint-disable react/prop-types */



const Count = ( {handleAgregar, handleRes, handleSum, cantidad} ) => {

   
  return (
    <>
    <div className="Count-container">
        <button onClick={handleRes} className="Count-sumar">-</button>
        <p className="Count-stock">{cantidad}</p>
        <button onClick={handleSum} className="Count-restar">+</button>
    </div>
        <button onClick={handleAgregar} className="Count-agregar">Agregar al carrito</button>
    </>
  )
}
export default Count;
