import React,{useEffect} from 'react';
import { login } from '../actions/userAction'
import {useDispatch,useSelector} from "react-redux";
import {useLocation, useHistory} from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd';
import {getUserDetail,updateUser} from '../actions/userAction'

const ProfileScreen = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const history = useHistory()
    const [form] = Form.useForm()
    const redirect = location.search ? location.search.split('=')[1] : '/'

    const {loading,error:userError,userInfo} = useSelector(state=>state.userLogin)
    const {error:Error,user} = useSelector(state=>state.userDetail)

    useEffect(()=>{
        if(!userInfo){
            history.push('/login')
        }else{
           if(!user.name){
               dispatch(getUserDetail('profile'))
           }else{
               form.setFieldsValue({
                   email:user.email,
                   name:user.name
               })
           }
        }
    },[dispatch,history,userInfo,user])

    const onFinish = (value) => {
        const {email,password,name} = value
        dispatch(updateUser({id:user._id,email, password, name}))

    }
    return (
        <>
            {userError&&(
                <h1>{userError}</h1>
            )}
            {Error&&(
                <h1>{Error}</h1>
            )}
           <Form
            labelCol={{span: 24}}
            wrapperCol={{span:24}}
            onFinish={onFinish}
            form={form}
           >
               <Form.Item
                   label="email"
                   name="email"
                   initialValue={user.email}
               >
                   <Input/>
               </Form.Item>
               <Form.Item
                   onVa
                   label="name"
                   name="name"
               >
                   <Input/>
               </Form.Item>
               <Form.Item
                   onVa
                   label="password"
                   name="password"
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

export default ProfileScreen;