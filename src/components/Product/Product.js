import React from 'react';
import './Product.css';
import { Button} from 'react-bootstrap';

const Product = (props) => {
    const {name,price}=props.product;
    return (
        <div className="product">
        <div className="one container col-md-2">
        <h1>{name}</h1>
        </div>
        <div className="two container col-md-7">
            <p>
                this is the course for your absolute success.you will become an expert on this after finishing the course.
                <h4>${price}</h4>
        <Button onClick={()=>props.addproduct(props.product)} variant="warning">Enroll now</Button>{' '}
            </p>
        </div>

        </div>
    );
};

export default Product;