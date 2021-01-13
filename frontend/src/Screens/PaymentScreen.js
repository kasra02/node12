import React from 'react';
import {useDispatch,useSelector} from "react-redux";
import {useHistory} from 'react-router-dom'
import {savePaymentMethod} from '../actions/cartAction'
import {Button, Form, Select} from 'antd'
import {CheckoutSteps} from "../components";
const PaymentScreen = () => {
    const {Option} = Select
    const dispatch = useDispatch()
    const history = useHistory()
    const onFinish = (value) => {
        console.log(value)
        dispatch(savePaymentMethod(value.payment))
        history.push('/order')
    }
    return (
        <>
            <CheckoutSteps current={2}/>
            <Form style={{marginTop:'20px'}} onFinish={onFinish}>
                <Form.Item
                    name="payment"
                    label="payment"
                >
                    <Select
                        placeholder="Select a option and change input text above"
                    >
                        <Option value="paypal">paypal</Option>
                        <Option value="strapi">strapi</Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>

        </>
    );
};

export default PaymentScreen;