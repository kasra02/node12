import React,{useEffect} from 'react';
import {Form,Input,Select,Button} from 'antd'
import {useHistory} from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux";
import {saveShippingAdress} from '../actions/cartAction'
import {CheckoutSteps} from '../components'
const ShippingScreen = () => {
    const [form] = Form.useForm()
    const { Option } = Select;
    const history = useHistory()
    const dispatch = useDispatch()
    const {shippingAddress} = useSelector(state=>state.cart)
    const onFinish = (value) => {
        dispatch(saveShippingAdress(value))
        history.push('/payment')
    }
    useEffect(()=>{
        form.setFieldsValue({
            address:shippingAddress.address,
            city:shippingAddress.city,
            postalCode:shippingAddress.postalCode,
            country:shippingAddress.country
        })
    },[])
    return (
       <>
           <CheckoutSteps current={1}/>
           <Form style={{marginTop:'25px'}} form={form} onFinish={onFinish} >
               <Form.Item
                   name="address"
                   label="address"
               >
                   <Input/>
               </Form.Item>
               <Form.Item
                   name="city"
                   label="city"
               >
                   <Input/>
               </Form.Item>
               <Form.Item
                   name="postalCode"
                   label="postalCode"
               >
                   <Input/>
               </Form.Item>
               <Form.Item
                   name="country"
                   label="country"
               >
                   <Input/>
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

export default ShippingScreen;