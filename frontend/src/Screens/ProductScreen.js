import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import {Gallery,ProductDetail,ProductCheckout,Loader,Message} from '../components'
import img1 from '../airpods.jpg'
import {useDispatch,useSelector} from "react-redux";
import {listProductDetails} from '../actions/productAction'
import {motion} from "framer-motion";
// ----------------- const ----------------------------
import { PageHeader,Row as AntRow, Col as AntCol } from 'antd';
import styled from "styled-components";

const containerVariants = {
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
        y:'100vh',
        transition:{
            duration:3
        }
    }
}

const ProductScreen = ({match}) => {
    const history = useHistory()
    const images2 = [img1,img1,img1,img1]
    const id = match.params.id
    const dispatch = useDispatch()
    const {product,error,loading} = useSelector(state=>state.productDetails)
    useEffect(()=>{
        dispatch(listProductDetails(id))
    },[dispatch,id])


    return (

        <motion.main variants={containerVariants}
                     animate='visible'
                     initial='hidden'
                     exit='exit'
        >
            <PageHeaderWrapper>
                <PageHeader
                    ghost={false}
                    className="site-page-header"
                    onBack={() => history.push('/')}
                    title="BACK"
                    subTitle="برگشت به صفحه محصولات"
                />
            </PageHeaderWrapper>
            <ProductWrapper>
                {loading&&(
                    <Loader/>
                )}
                {error&&(
                    <Message/>
                )}
                {product&&(
                    <div>
                        <AntRow gutter={[5,5]}>
                            <AntCol sm={24}  md={12} lg={10}>
                                <Wrapper>
                                    <Gallery images={images2}/>
                                </Wrapper>
                            </AntCol>
                            <AntCol  sm={24} xs={24} md={12} lg={9}>
                                <Wrapper style={{background:'white'}}>
                                    <ProductDetail product={product} />
                                </Wrapper>
                            </AntCol>
                            <AntCol  sm={24} xs={24} md={12} lg={5}>
                                <Wrapper >
                                    <ProductCheckout product={product} />
                                </Wrapper>
                            </AntCol>
                        </AntRow>
                    </div>
                )}

            </ProductWrapper>
        </motion.main>


    );
};
const PageHeaderWrapper = styled.div`
  background-color: #f5f5f5;
  margin-bottom: 10px;
`
const ProductWrapper = styled.div`
    padding:0px;
    @media (max-width: 500px) {
            padding:0px;
    }
`
const Wrapper = styled.div`
    // background:white;
    padding:15px;
`

export default ProductScreen;