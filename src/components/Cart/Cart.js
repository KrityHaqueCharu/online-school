import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart=props.cart;
    const total=cart.reduce((total,val)=> total + val.price ,0);
    return (
        <div>
    <h4>Purchase List</h4>
    <p>Course purchased:{cart.length}</p>
    <p>Total amount:${total}</p>
    <button className="check">Proceed</button>
        </div>
    );
};

export default Cart;