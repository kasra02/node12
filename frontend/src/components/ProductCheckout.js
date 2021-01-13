import React,{useState} from 'react';
import styled from "styled-components";
import { Button,Descriptions as AntDescriptions} from 'antd';
import {useHistory} from 'react-router-dom'
import {Form, Select} from 'antd';
import { InputNumber } from 'antd';

const ProductCheckout = ({product}) => {
    const {price,countInStock} = product
    const [qty,setQty] = useState(1)
    const history = useHistory()
    console.log(qty);
    const addtoCartHandler = () => {
        history.push('/cart',{id:product._id,qty})
    }
    console.log()
    return (
        <Wrapper>
            <AntDescriptions style={{width:'100%'}} bordered column={1}>
                <AntDescriptions.Item label='price'>
                    {price}
                </AntDescriptions.Item>
                <AntDescriptions.Item label='STOCK'>
                    {countInStock > 1 ? 'IN STOCK' : 'OUT STOCK' }
                </AntDescriptions.Item>
                <AntDescriptions.Item label='QTY'>
                    <InputNumber min={1} value={qty} max={countInStock} defaultValue={1} onChange={setQty} />
                </AntDescriptions.Item>
            </AntDescriptions>

            <Button type="primary" block onClick={addtoCartHandler}>
               ADD TO CART
            </Button>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    display: flex;
    height: 100%;
    min-height: 500px;
    flex-direction: column;
    // justify-content: space-evenly;
    align-items: flex-start;

`

export default ProductCheckout;