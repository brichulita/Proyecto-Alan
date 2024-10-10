import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
const ProductosDisponibles = () => {
  const { addToCart } = useContext(CartContext);

  const productos = [
    { id: 1, nombre: 'Straps', precio: 14500 },
    { id: 2, nombre: 'Guantes', precio: 11000 },
    { id: 3, nombre: 'Cinturon', precio: 20000 },
    { id: 4, nombre: 'Elástico', precio: 9000 },
    { id: 5, nombre: 'Colágeno Star Nutrition', precio: 19000 },
    { id: 6, nombre: 'Colágeno Sascha Fitness', precio: 16000 },
    { id: 7, nombre: 'Colágeno Ena', precio: 17200 },
    { id: 8, nombre: 'Creatina Star Nutrition', precio: 13500 },
    { id: 9, nombre: 'Creatina Body Advance', precio: 11800 },
    { id: 10, nombre: 'Creatina Ena', precio: 9900 },
    { id: 11, nombre: 'Proteína Star Nutrition', precio: 33000 },
    { id: 12, nombre: 'Proteína Ena', precio: 27000 },
    { id: 13, nombre: 'Proteína Body Advance', precio: 29300 },
    { id: 14, nombre: 'Proteína Mervick', precio: 17000 },
    { id: 15, nombre: 'Quemador Ena', precio: 9600 },
    { id: 16, nombre: 'Quemador Star Nutrition', precio: 13000 },
    { id: 17, nombre: 'Quemador Bady Advance', precio: 9300 },
  ];

  return (
    <div>
      <h2 style= {{ backgroundcolor: 'grey', color: 'white', border: 'none', padding: '10px 20px', borderradius: '10px' }} >Carrito de compras</h2>
      <h4>Productos Disponibles</h4>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - ${producto.precio}
            <button onClick={() => addToCart(producto)}>Agregar al Carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductosDisponibles;
