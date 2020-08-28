import React from 'react';
import './Product.css';
import { Button} from 'react-bootstrap';

const Product = (props) => {
    const {name,price,Trainer,Duration,Text}=props.product;
    return (
        <div className="product">
        <div className="one container col-md-2">
        <h1>{name}</h1>
        </div>
        <div className="two container col-md-7">
            <p>
                <h3>Learn {Text} with the specialist</h3>
                <h5>${price}</h5>
                <p><h5>By {Trainer}</h5></p>
                <p><h6>Duration: {Duration}hr</h6></p>
        <Button onClick={()=>props.addproduct(props.product)} variant="warning">Buy now</Button>{' '}
            </p>
        </div>

        </div>
    );
};

export default Product;