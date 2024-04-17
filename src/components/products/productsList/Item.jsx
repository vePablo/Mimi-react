/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Item = ({ producto }) => {
  return (
    <>
      <div className="card-list">
  <article className="card">
    <Link to={`/item/${producto.id}`}><figure className="card-image">
      <img
        src={producto.image}
        alt={producto.description}
      />
    </figure></Link>
    <div className="card-header">
      <Link to={`/item/${producto.id}`}>{producto.title}</Link>
    </div>
    <div className="card-footer">
      <div className="card-meta card-meta--views">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tag" viewBox="0 0 16 16">
      <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0"/>
      <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1m0 5.586 7 7L13.586 9l-7-7H2z"/>
      </svg>
      {producto.category}
      </div>
      <div className="card-meta card-meta--date">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-dollar" viewBox="0 0 16 16">
      <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"/>
      </svg>{producto.price}
      </div>
      <Link to={`/item/${producto.id}`} >
        <button className="boton boton-info mt-2">
          Más detalles
        </button>
      </Link>
    </div>
  </article>
</div>
    </>
  );
};

export default Item;

