import React from 'react';
import { Descriptions,Image,InputNumber,Button  } from 'antd';
import {useDispatch} from "react-redux";
import {FaTrash} from "react-icons/fa";
import {removeFromCart} from '../actions/cartAction'
const CartItem = ({cartItem,addToCart}) => {
    const dispatch = useDispatch()

    const {product,price,qty,countInStock,image,name,id} = cartItem

    return (
        <>
            <Descriptions bordered  style={{marginTop:'20px',borderTop:'1px solid gray',borderBottom:'1px solid gray'}} column={{ xxl: 4, xl: 4, lg: 3, md: 2, sm: 1, xs: 1 }} >
                <Descriptions.Item label="image" style={{maxWidth:'150px'}}>
                    <Image
                        width={100}
                        src={image}
                    />
                </Descriptions.Item>
                <Descriptions.Item  label="name">
                    {name}
                </Descriptions.Item>

                <Descriptions.Item label="price">
                    {price}
                </Descriptions.Item>
                <Descriptions.Item label="qty">
                    <InputNumber min={1} max={countInStock} value={qty} onChange={(value)=>dispatch(addToCart(product,Number(value)))} />
                </Descriptions.Item>
                <Descriptions.Item  label="name">
                   <Button onClick={()=>dispatch(removeFromCart(product))}>
                       <FaTrash/>
                   </Button>
                </Descriptions.Item>

            </Descriptions>
        </>
    );
};

export default CartItem;