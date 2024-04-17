/* eslint-disable react/prop-types */

import Items from "./Item";


const ItemList = ( {productos , title} ) => {

  return (
    <>
    <div className="container">
        <h2 className="Productos-title">{title}</h2>

        <div className="Productos-container mt-4">
          { productos.map((prod) => <Items producto= { prod } key={ prod.id } />) }
        </div>

    </div>

    </>
  )
}

export default ItemList;