import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart=props.cart;
    const total=cart.reduce((total,val)=> total + val.price ,0);
    return (
        <div>
  <h4>purchase summary</h4>
    <p>course purchased:{cart.length}</p>
    <p>total amount:${total}</p>
    <button className="check">check out</button>
        </div>
    );
};

export default Cart;