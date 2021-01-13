import React, {useEffect,useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getOrderDetails, payOrder} from '../actions/orderAction'
import {useParams} from 'react-router-dom'
import styled from "styled-components";
import { PayPalButton } from "react-paypal-button-v2";
import {Card as AntCard, Col as AntCol, Row as AntRow, Space} from 'antd';
import {ConfigAxios} from '../config/axios'
import {Descriptions as AntDescriptions} from 'antd';
import {Link} from 'react-router-dom'
import {Image as AntImage, Alert as AntAlert} from 'antd';
import axios from "axios";
import {ORDER_PAY_RESET} from "../constants/orderConstant";

const OrderScreen = ({matcch}) => {
    const [sdkReady, setSdkReady] = useState(false)
    const dispatch = useDispatch()
    const {id:orderId} = useParams()
    const {order, loading, error} = useSelector(state => state.orderDetails)
    const {success: successPay, loading: loadingPay, error: errorPay} = useSelector(state => state.orderPay)

    useEffect(() => {
        const addPayPalScript = async () => {
            const { data: clientId } = await ConfigAxios.get('/api/config/paypal')
            const script = document.createElement('script')
            script.type = 'text/javascript'
            script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
            script.async = true
            script.onload = () => {
                setSdkReady(true)
            }
            document.body.appendChild(script)
        }

        if (successPay) {
            dispatch(getOrderDetails(orderId))
        }

        if (!order ) {
            dispatch({ type: ORDER_PAY_RESET })
            dispatch(getOrderDetails(orderId))
        } else if (!order.isPaid) {
            if (!window.paypal) {
                addPayPalScript()
            } else {
                setSdkReady(true)
            }
        }
    }, [dispatch,successPay, orderId, order])


    // useEffect(() => {
    //     dispatch(getOrderDetails(orderId))
    // }, [dispatch, orderId])

    const successPaymentHandler = (paymentResult) => {
        dispatch(payOrder(orderId, paymentResult))
    }


    return (
        <>
            {error && (
                <>
                    <p>{error}</p>
                </>
            )}
            {loading && (
                <h1>dslkj</h1>
            )}
            {order && (
                <Wrapper>
                    <Row gutter={[5, 5]}>
                        <Col xs={24} sm={24} md={12} lg={8}>
                            <Card title='shipment and payment'>
                                <Card type='inner' title='shippment'>
                                    {order.isDelivered ? (
                                        <Alert message="Success Tips" type="success" showIcon/>
                                    ) : (
                                        <Alert message="essal nashod" type="error" showIcon/>
                                    )}
                                    <Descriptions bordered column={1}>
                                        <Descriptions.Item label="city">
                                            {order.shippingAddress.city}
                                        </Descriptions.Item>
                                        <Descriptions.Item label="country">
                                            {order.shippingAddress.country}
                                        </Descriptions.Item>
                                        <Descriptions.Item label="postalCode">
                                            {order.shippingAddress.postalCode}
                                        </Descriptions.Item>
                                        <Descriptions.Item label="address">
                                            {order.shippingAddress.address}
                                        </Descriptions.Item>
                                    </Descriptions>
                                </Card>
                                <Card type='inner' title='pay'>
                                    {order.isPaid ? (
                                        <Alert message="Success Tips" type="success" showIcon/>
                                    ) : (
                                        <Alert message="pardakht nashode" type="error" showIcon/>
                                    )}
                                    <Descriptions bordered column={1}>
                                        <Descriptions.Item label="paid">
                                            {order.paymentMethod}
                                        </Descriptions.Item>
                                    </Descriptions>
                                </Card>
                            </Card>
                            {/*<p>{order.shippingAddress.city}</p>*/}
                            {/*<p>{order.shippingAddress.city}</p>*/}
                            {/*{order.paymentMethod}*/}
                            {/*{order.isDelivered.toString()}*/}
                            {/*{order.isPaid.toString()}*/}
                            {/*{order.paymentMethod}*/}

                        </Col>
                        <Col xs={24} sm={24} md={12} lg={8}>
                            <Card title='order item detail'>
                                {order.orderItems.map(orderitem => {
                                    return (
                                        <Card type="inner" title={orderitem.name}>
                                            <AntImage src={orderitem.image}/>
                                            <Descriptions bordered column={1}>
                                                <Descriptions.Item label="price">
                                                    {orderitem.price}
                                                </Descriptions.Item>
                                                <Descriptions.Item label="qty">
                                                    {orderitem.qty}
                                                </Descriptions.Item>

                                                <Descriptions.Item label="total">
                                                    {orderitem.qty * orderitem.price}
                                                </Descriptions.Item>
                                            </Descriptions>
                                        </Card>
                                    )
                                })}
                            </Card>

                        </Col>
                        <Col xs={24} sm={24} md={12} lg={8}>
                            <Card title='prices'>
                                {order.shippingPrice}
                                {/*{errorPay&&('aslfkdj')}*/}
                                {/*{successPay&&('aslfkdj')}*/}
                                {!order.isPaid&&(
                                    <PayPalButton  amount={order.totalPrice} onSuccess={successPaymentHandler} />
                                    )}
                            </Card>
                            {/*{itemPrice}*/}
                            {/*{order.shippingPrice}*/}
                            {/*{order.taxPrice}*/}
                            {/*{order.totalPrice}*/}
                        </Col>
                    </Row>
                </Wrapper>


            )}
        </>
    );
};
const Wrapper = styled.div`
    background: #eee;
    width: 100%;
    min-height: 100%;
    height:auto;
    position: absolute;
`
const Row = styled(AntRow)`

`
const Col = styled(AntCol)`

`
const Card = styled(AntCard)`
    p{
        padding:0;
        margin:0px;
    }
  
    
`
const Descriptions = styled(AntDescriptions)`
    .ant-descriptions-item-label{
        width:20px;
    }
`
const Image = styled(AntImage)`
    
`
const Alert = styled(AntAlert)`

`
export default OrderScreen;