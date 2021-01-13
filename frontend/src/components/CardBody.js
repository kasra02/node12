import React from 'react';
import styled from 'styled-components'
import Rating from "./Rating";

const CardBody = ({product}) => {
    return (
        <CartBody>
            <h3>{product.name}</h3>
            <span>by {product.brand}</span>
            <Rating review={product.numReviews} rating={product.rating}/>
            <Price>{product.price}</Price>
        </CartBody>
    );
};
const CartBody = styled.div`
    display:flex;
    flex-direction:column;   
`
const Price = styled.span`
    color:blue;
    font-size:20px;
`

export default CardBody;