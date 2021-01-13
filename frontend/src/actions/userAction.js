import {USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL,
USER_REGISTER_FAIL,USER_REGISTER_SUCCESS,USER_REGISTER_REQUEST,
    USER_DETAIL_REQUEST,USER_DETAIL_FAIL,USER_DETAIL_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,USER_UPDATE_PROFILE_SUCCESS,USER_UPDATE_PROFILE_REQUEST
} from '../constants/userConstant'
import {UserLoginAxios,UserRegisterAxios,UserDetailAxios} from "../config/axios";
import {PRODUCT_DETAIL_FAIL} from "../constants/productConstant";

export const login = (email,password) => async(dispatch) => {
    console.log(email,password)
    dispatch({type:USER_LOGIN_REQUEST})
    try{
       const {data} = await UserLoginAxios.post('/login',{email,password})
       dispatch({type:USER_LOGIN_SUCCESS,payload:data})
       localStorage.setItem('userInfo',JSON.stringify(data))

    }catch (error){
        dispatch({type:USER_LOGIN_FAIL,payload:error.response && error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({type:USER_LOGIN_FAIL})
}

export const register = (name,email,password) => async (dispatch) => {
    dispatch({type:USER_REGISTER_REQUEST})
    try{
        const {data} = await UserRegisterAxios.post('',({name,email,password}))
        dispatch({type:USER_REGISTER_SUCCESS,payload:data})
        dispatch({type:USER_LOGIN_SUCCESS,payload:data})
        localStorage.setItem('userInfo',JSON.stringify(data))
    }catch (error){
        dispatch({type:USER_LOGIN_FAIL,payload:error.response && error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}

export const getUserDetail = (id) => async (dispatch,getState) => {
    try{
        dispatch({type:USER_DETAIL_REQUEST})
        const {userLogin:{userInfo}} = getState()
        const config = {
            headers:{
                Authorization:`Bearer ${userInfo.token}`
            }
        }
        const {data} = await UserDetailAxios.get(`/${id}`, config)
        console.log(data)
        dispatch({type:USER_DETAIL_SUCCESS,payload:data})
    }
    catch (error){
        dispatch({type:USER_DETAIL_FAIL,payload:error.response && error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}

export const updateUser = (user) => async (dispatch,getState) => {
    try{
        dispatch({type:USER_UPDATE_PROFILE_REQUEST})
        const {userLogin:{userInfo}} = getState()
        const config = {
            headers:{
                Authorization:`Bearer ${userInfo.token}`
            }
        }
        const {data} = await UserDetailAxios.put(`/profile`,user, config)
        dispatch({type:USER_UPDATE_PROFILE_SUCCESS,success:true,payload:data})
    }
    catch (error){
        dispatch({type:USER_UPDATE_PROFILE_FAIL,payload:error.response && error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}

