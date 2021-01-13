import React,{useEffect} from 'react';
import {CartItem, CheckoutSteps} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {Row as AntRow, Button} from 'antd'
import {createOrder} from '../actions/orderAction'
import {useHistory} from 'react-router-dom'

const PlaceOrderScreen = () => {
    const cart = useSelector(state => state.cart)
    const {cartItems, shippingAddress, paymentMethod} = useSelector(state => state.cart)
    const {error:errorOrder,loading:loadingOrder,success,order} = useSelector(state=>state.orderCreate)
    const history = useHistory()
    const dispatch = useDispatch()
    console.log('cartItems',cartItems);
    //total --- itemsPrice
    cart.itemsPrice = cartItems.reduce((acc,cur)=> acc+cur.price*cur.qty ,0 )

    // shippingPrice -- shippingPrice
    cart.shippingPrice = cart.itemsPrice>100?0:10

    // tax price --- taxPrice
    cart.taxPrice = Number(0.15 * cart.itemsPrice).toFixed(2)

    //total --- itemsPrice
    cart.totalPrice = Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)

    // get orderCreate from store

    // useEffect push,  order._id
    useEffect(()=>{
        if(success){
            history.push(`/orders/${order._id}`)
        }
    },[history, success])


    const submitHandler = () => {
    dispatch(createOrder({
        orderItems:cartItems,
        paymentMethod,
        shippingAddress,
        taxPrice:cart.taxPrice,
        shippingPrice:cart.shippingPrice,
        itemsPrice:cart.itemsPrice,
        totalPrice:cart.totalPrice,
    }))
    }

    return (
        <AntRow>
            error:{errorOrder&&`${errorOrder}`}
            <CheckoutSteps current={3}/>
            <AntRow>
                {shippingAddress.address}
                {shippingAddress.city}
                {shippingAddress.postalCode}
                {shippingAddress.country}
            </AntRow>
            <AntRow>
                {paymentMethod}
            </AntRow>
            <AntRow>
                {cartItems.map(item => {
                    return (
                        item.name
                    )
                })}
            </AntRow>
            <AntRow>
                <Button onClick={() => submitHandler()}>
                    k
                </Button>
            </AntRow>
        </AntRow>
    );
};

export default PlaceOrderScreen;