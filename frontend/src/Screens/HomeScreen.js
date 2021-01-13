import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from "react-redux";
import {listProducts} from '../actions/productAction'
import {motion} from 'framer-motion'
// ----------------- antd import ----------------------------
import {Layout,Typography,Row as AntRow, Col as AntCol } from 'antd'

// ----------------- internal import ----------------------------

import {Product,Loader,Message} from "../components"


// ----------------- const ----------------------------
const {Content} = Layout
const { Title:AntTitle } = Typography;


const containerVarient = {
    hidden:{
        x:'-100vw'
    },
    visible:{
        x:'0vw',
        transition:{
            duration:1
        }
    },
    exit:{
        x:'100vw',
        transition:{
            duration:2
        }
    }
}


// ----------------- function ----------------------------
const HomeScreen = () => {
    const dispatch = useDispatch()
    const {products,error,loading} = useSelector(state=>state.productList)
    useEffect(()=>{
        dispatch(listProducts())
    },[dispatch])
    return (
        <motion.main  variants={containerVarient} exit='exit' >
            <Content style={{ padding:'15px 10px', }}>
                <AntTitle style={{ textAlign:'center', }} level={2}> all product </AntTitle>
            </Content>
            <Content>
                {loading &&(
                    <Loader size={'large'}/>
                )}
                {error&&(
                    <Message msg={error}/>
                )}
                {products&&(
                   <motion.div variants={containerVarient}
                               animate='visible'
                               initial='hidden'
                               exit='exit'
                   >
                       <AntRow gutter={[5,5]}>
                           {products.map((product,index)=>{
                               return(
                                   <AntCol key={product._id} sm={24} md={12} lg={8}>
                                       <Product  product={product}/>
                                   </AntCol>
                               )
                           })}
                       </AntRow>
                   </motion.div>
                )}

            </Content>
        </motion.main>
    );
};

export default HomeScreen;