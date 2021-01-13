import React from 'react';
import {Link} from 'react-router-dom'
import Rating from './Rating'
import {Descriptions as AntDescriptions} from "antd";
import styled from "styled-components";

const ProductDetail = ({product}) => {
    const {name,price,category,brand,rating,numReviews,description} = product
    return (
        <Wrapper>
            <h1>{name}</h1>
            <Link to={`/brand/${brand}`}>
                Visit the {brand} store
            </Link>
            <h1>{price}</h1>
            <Rating review={numReviews} rating={rating}/>
            <AntDescriptions bordered column={1}>
                <AntDescriptions.Item label='brand'>
                    {brand}
                </AntDescriptions.Item>
                <AntDescriptions.Item label='category'>
                    {category}
                </AntDescriptions.Item>
                <AntDescriptions.Item>
                    {description}
                </AntDescriptions.Item>
            </AntDescriptions>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    display: flex;
    height: 100%;
    min-height: 500px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
`


export default ProductDetail;