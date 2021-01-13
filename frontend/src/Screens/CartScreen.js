import React,{useEffect} from 'react';
import {useLocation,useHistory} from 'react-router-dom'
import styled from "styled-components";
import {useDispatch,useSelector} from "react-redux";
import {addToCart} from '../actions/cartAction'
import {CartItem,CartHeader} from '../components'
import {motion} from "framer-motion";
import { PageHeader,Row as AntRow, Statistic, Col as AntCol,Button } from 'antd';


const CartScreen = () => {
    const location = useLocation()
    const {qty,id} = location.state || {}
    const dispatch = useDispatch()
    const history = useHistory()
    const {cartItems} = useSelector(state=>state.cart)
    useEffect(()=>{
       if(id){
           dispatch(addToCart(id,qty))
       }
    },[id,qty])

    return (
        <Wrapper>
            <PageHeader
                ghost={false}
                className="site-page-header"

                onBack={() => history.push('/')}
                title="BACK"
                subTitle="برگشت به صفحه محصولات"
                extra={[
                    <Button key="1"
                            onClick={()=>history.push('/login?redirect=shipping')}
                            type="primary"
                    >
                        checkout
                    </Button>,
                ]}
            >
               <AntRow gutter={[40,10]}>
                  <AntCol>
                      <Statistic
                          title="total"
                          value={cartItems.reduce((acc,cur) => acc + cur.qty,0)}
                          precision={0}
                          valueStyle={{ color: '#3f8600' }}
                          // prefix={<ArrowUpOutlined />}
                          suffix=""
                      />
                  </AntCol>

                 <AntCol>
                     <Statistic
                         title="Active"
                         value={cartItems.reduce((acc,cur) => acc + cur.qty * cur.price ,0)}
                         precision={2}
                         valueStyle={{ color: '#3f8600' }}
                         // prefix={<ArrowUpOutlined />}
                         suffix="T"
                     />
                 </AntCol>
               </AntRow>

            </PageHeader>
            {cartItems.map((cartItem,index)=>{
                return(
                    <CartItem addToCart={addToCart} key={index} cartItem={cartItem}/>
                )
            })}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background:white;
`

export default CartScreen;