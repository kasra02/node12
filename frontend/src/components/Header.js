import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {  Dropdown, Button, message, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

// ----------------- ANTD ----------------------------
import {Layout,Menu as AntMenu, Col as AntCol, Row as AntRow} from 'antd'
import { ShoppingCartOutlined,LoginOutlined,CarOutlined,AppstoreOutlined } from '@ant-design/icons';
import {logout} from "../actions/userAction";
// ----------------- const ----------------------------
const {Header:AntHeader}=Layout

// ----------------- function ----------------------------
const Header = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const [current,setCurrent] = useState(location.pathname.toString())
    const ClickHandle = (e) => {
        setCurrent(e.key)
    }
    const {userInfo} = useSelector(state=>state.userLogin)

    function handleMenuClick(e) {
        message.info('Click on menu item.');
        console.log('click', e);
    }

    const menu = (
        <AntMenu>
            <AntMenu.Item>
                <button style={{border:'0px',background:'none'}} onClick={()=>dispatch(logout())}>favorite</button>
            </AntMenu.Item>
            <AntMenu.Item>
                <button style={{border:'0px',background:'none'}} onClick={()=>dispatch(logout())}>order</button>
            </AntMenu.Item>
            <AntMenu.Item>
                <button style={{border:'0px',background:'none'}} onClick={()=>dispatch(logout())}>track</button>
            </AntMenu.Item>
            <AntMenu.Item>
                <button style={{border:'0px',background:'none'}} onClick={()=>dispatch(logout())}>logout</button>
            </AntMenu.Item>
        </AntMenu>
    );

    return (
        <AntHeader>
           <AntRow>
               <AntCol lg={24}>
                   <AntMenu onClick={ClickHandle} selectedKeys={[current]} theme='dark' mode='horizontal'>
                       <AntMenu.Item key="/" icon={<AppstoreOutlined />}>
                           <Link to='/'>
                               prdocuts
                           </Link>
                       </AntMenu.Item>
                       <AntMenu.Item key="/cart" icon={<ShoppingCartOutlined />} title='alo' >
                           <Link to='/cart'>
                               cart
                           </Link>
                       </AntMenu.Item>

                       {userInfo?(
                           <AntMenu.Item key="/login">
                               <Dropdown overlay={menu}>
                                   <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                       profile <DownOutlined />
                                   </a>
                               </Dropdown>
                           </AntMenu.Item>
                       ):(
                           <AntMenu.Item key="/login" icon={<LoginOutlined />} >
                               <Link to='/login'>
                                   login
                               </Link>
                           </AntMenu.Item>
                       )}
                       {/*<AntMenu.Item key="/shipping" icon={<CarOutlined />}>*/}
                       {/*    <Link to='/shipping'>*/}
                       {/*        Shipping*/}
                       {/*    </Link>*/}
                       {/*</AntMenu.Item>*/}
                   </AntMenu>
               </AntCol>
           </AntRow>
        </AntHeader>
    );
};

export default Header;