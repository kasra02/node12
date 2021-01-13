import React from 'react';
import {useHistory} from 'react-router-dom'

import CardBody from "./CardBody";
// ----------------- antd import ----------------------------
import {Card  as AntCard, Descriptions as AntDescriptions  } from 'antd'
import { InfoCircleOutlined, ShoppingCartOutlined, SettingOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";


const Product = ({product}) => {
    const {image} = product
    const history = useHistory()
    return (
        <AntCard
            style={{ width: '100%',
            }}
            cover={<img src={image}/>}
            actions={[
                <Link to={`/product/${product._id}`} >
                    <InfoCircleOutlined title='fdaskdjh' key="setting" /> <span style={{marginLeft:5}}>More Info</span>
                </Link>,
                <button style={{background:'none',border:'0px',cursor:'pointer'}} onClick={()=>{history.push('/cart',{qty:1,id:product._id})}}>
                    <ShoppingCartOutlined title='fdaskdjh' key="setting" /> <span style={{marginLeft:5}}>CART</span>
                </button>,
            ]}
        >
            <CardBody product={product}/>

        </AntCard>
    );
};


export default Product;