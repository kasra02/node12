import React,{useEffect} from 'react';
import { login } from '../actions/userAction'
import {useDispatch,useSelector} from "react-redux";
import {useLocation, useHistory} from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd';

const LoginScreen = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const history = useHistory()
    const {loading,error:userError,userInfo} = useSelector(state=>state.userLogin)
    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(()=>{
        if(userInfo){
            history.push(redirect)
        }
    },[history,userInfo])

    const onFinish = (value) => {
        const {email,password} = value
        dispatch(login(email,password))
    }
    return (
        <>
            {userError&&(
                <h1>{userError}</h1>
            )}
           <Form
            labelCol={{span: 24}}
            wrapperCol={{span:24}}
            onFinish={onFinish}
           >
               <Form.Item
                   label="email"
                   name="email"
                   rules={[
                       {
                           required: true,
                           message: 'Please input your username!',
                       }
                   ]}
               >
                   <Input/>
               </Form.Item>
               <Form.Item
                   onVa
                   label="password"
                   name="password"
                   rules={[
                       {
                           required: true,
                           message: 'Please input your username!',
                       }
                   ]}
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

export default LoginScreen;