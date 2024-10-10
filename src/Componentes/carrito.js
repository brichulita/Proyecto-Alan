import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Carrito = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h4>Mi carrito de compras</h4>
      {cartItems.length === 0 ? (
        <p>No hay ningun producto en el carrito</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.nombre} - ${item.precio} x {item.quantity}
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Carrito;
