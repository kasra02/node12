import React from 'react'
import {Header,Footer,Header2}  from './components'
import {OrderScreen,HomeScreen,ProductScreen,LoginScreen,CartScreen,ShippingScreen,RegisterScreen,PaymentScreen,PlaceOrderScreen} from './Screens'
import {BrowserRouter as Rotuer,Switch,Route} from 'react-router-dom'
import {useLocation} from "react-router-dom";
import useGlobalContext from './context'
import {Layout} from 'antd'
import styled from "styled-components";
// import './Swiper/swiper-bundle.css'
import {AnimatePresence} from 'framer-motion'


import { Menu, Button } from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';
import ProfileScreen from "./Screens/ProfileScreen";

// const
const {Content} = Layout


function App() {
    const {isSideBarOpen,isContentOpen,openSidebar} = useGlobalContext()
  return (
   <Rotuer>
       <Header2/>
       {isContentOpen&&(
               <Layout>
                   <Button type="primary" onClick={()=>openSidebar()} style={{ marginBottom: 16 }}>
                       {React.createElement(isSideBarOpen ? MenuUnfoldOutlined : MenuFoldOutlined)}
                   </Button>
                   <ContentWrapper >
                       <AnimatePresence onCo >
                           <Switch
                               // location={location}
                               // key={location.key}
                           >

                               <Route exact path='/' component={HomeScreen}/>
                               <Route exact path='/profile' component={ProfileScreen}/>
                               <Route exact path='/payment' component={PaymentScreen}/>
                               <Route exact path='/product/:id' component={ProductScreen}/>
                               <Route exact path='/login' component={LoginScreen}/>
                               <Route exact path='/register' component={RegisterScreen}/>
                               <Route exact path='/order' component={PlaceOrderScreen}/>
                               <Route exact path='/orders/:id' component={OrderScreen}/>
                               <Route exact path='/cart' component={CartScreen}/>
                               <Route exact path='/shipping' component={ShippingScreen}/>
                           </Switch>
                       </AnimatePresence>
                   </ContentWrapper>
                   <Footer/>
               </Layout>)
       }


   </Rotuer>
  );
}

const ContentWrapper = styled.div`
    position:relative;
    padding:0px;
    background-image: linear-gradient(to bottom, #f0f2f5, #f3f4f7, #f6f7f8, #f9f9fa, #fcfcfc, #fcfcfc, #fcfcfc, #fcfcfc, #f9f9fa, #f6f7f8, #f3f4f7, #f0f2f5);
    min-height:81vh;
    height:auto;
    margin:10px;
    @media (max-width: 500px) {
            margin:5px;
            padding:0px;
    }
`

export default App;
