import React from 'react';
import useGlobalContext from "../context";
import styled from "styled-components";
import {motion,AnimatePresence} from "framer-motion";
import {Row as AntRow, Col as AntCol,Space as AntSpace,Button} from 'antd'
import {FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../actions/userAction";

const menuVariants = {
    'hidden':{
        y:'-110%',
        transition: {
            duration: 1
        }
    },
    'visible':{
        y:'0',
        transition:{
            duration:.5
        }
    },

}


const Header2 = () => {
    const {isSideBarOpen,closeSidebar} = useGlobalContext()
    const dispatch = useDispatch()
    const {userInfo} = useSelector(state=>state.userLogin)
    return isSideBarOpen ? (
        <AnimatePresence>


        <Wrapper
            variants={menuVariants}
            animate='visible'
            initial='hidden'
            exit='hidden'
        >
            <AntRow gutter={[15,5]}>
                <AntCol xs={24}>
                    <Header>
                        <Button>
                            <Link to='/' onClick={()=>closeSidebar()}>
                                Product
                            </Link>
                        </Button>
                        <AntSpace>
                            {userInfo?`${userInfo.name}`:'unkonw'}
                        </AntSpace>
                        <Button type="primary"  onClick={()=>closeSidebar()} shape="circle" icon={<FaTimes />} />
                    </Header>
                </AntCol>

                <AntCol xs={24}>
                    <Login>
                        {userInfo?(
                            <>
                                <AntSpace
                                >

                                    <Button>
                                        <Link to='/profile' onClick={()=>closeSidebar()}>
                                            profile
                                        </Link>
                                    </Button>
                                    <Button>
                                        <Link to='/cart' onClick={()=>closeSidebar()}>
                                            cart
                                        </Link>
                                    </Button>
                                    <Button>
                                        <Link  onClick={()=> {
                                            dispatch(logout())
                                            closeSidebar()
                                        } }>
                                            logout
                                        </Link>
                                    </Button>
                                </AntSpace>
                            </>
                        ):(
                            <AntSpace>
                                <Button>
                                    <Link to='/login' onClick={()=>closeSidebar()}>
                                        login
                                    </Link>
                                </Button>
                                <Button>
                                    <Link to='/register' onClick={()=>closeSidebar()}>
                                        register
                                    </Link>
                                </Button>
                            </AntSpace>
                        )}

                    </Login>
                </AntCol>

                <AntCol xs={24}>
                    <Content>
                        <Item>
                            <div>
                                <div style={{zIndex:100,color:'wheat',display:'flex',justifyContent:'center',alignItems:'center'}}>dlskflj</div>
                            </div>
                        </Item>
                        <Item>
                            <div>
                                <div style={{zIndex:100,color:'wheat',display:'flex',justifyContent:'center',alignItems:'center'}}>dlskflj</div>
                            </div>
                        </Item>
                        <Item>
                            <div>
                                <div style={{zIndex:100,color:'wheat',display:'flex',justifyContent:'center',alignItems:'center'}}>dlskflj</div>
                            </div>
                        </Item>
                        <Item>
                            <div>
                                <div style={{zIndex:100,color:'wheat',display:'flex',justifyContent:'center',alignItems:'center'}}>dlskflj</div>
                            </div>
                        </Item>
                        <Item>
                            <div>
                                <div style={{zIndex:100,color:'wheat',display:'flex',justifyContent:'center',alignItems:'center'}}>dlskflj</div>
                            </div>
                        </Item>
                        <Item>
                            <div>
                                <div style={{zIndex:100,color:'wheat',display:'flex',justifyContent:'center',alignItems:'center'}}>dlskflj</div>
                            </div>
                        </Item>

                    </Content>
                </AntCol>
            </AntRow>
        </Wrapper>
        </AnimatePresence>
        ):null
};

const Wrapper = styled(motion.div)`
    background:black;
    min-height:100vh;
    width:100vw;
    padding:10px;
    position:absolute;
    z-index:312;
    @media screen and (min-width:500px){
        background:black;
        height:100vh;
    }
`
const Header = styled.div`
    background: white;
    width: 100%;
    min-height: 5vh;
    padding: 0px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius:10px;
`
const Login = styled.div`
    background: white;
    width: 100%;
    min-height: 5vh;
    padding: 0px 10px;
    display: grid;
    
    border-radius:10px;
`
const Content = styled.div`
    width: 100%;
    min-height: 50vh;
    padding: 0px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius:10px;
    display:grid;
    padding: 10px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr) ) ;
    grid-gap: 10px;
`
const Item = styled.div`
        position:relative;
        background: gray;
        min-height: 200px;
        width: 100%;
        height: 100%;
        border-radius:10px;
        display:flex;
        justify-content: center;
        align-items: center;
        background-image: url(https://cdn.pixabay.com/photo/2019/10/15/13/33/red-deer-4551678_960_720.jpg);
        background-position: center center;
        background-size: cover;
        overflow:hidden;
        div{
            background:rgba(0,0,0,0.3);
            width:100%;
            height:100%;
            position:absolute;
            top:0;
            left:0
        }
`

export default Header2;