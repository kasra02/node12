import React from 'react';
import { Spin, Alert } from 'antd';

const Loader = ({size,type,message}) => {
    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',minHeight:'500px',height:'100%'}}
        >
            <Spin size={size} />
        </div>
    );
};

export default Loader;