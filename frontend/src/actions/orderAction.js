// constant
import {ORDER_CREATE_REQUEST,ORDER_CREATE_FAIL,ORDER_CREATE_SUCCESS,
    ORDER_DETAIL_REQUEST,ORDER_DETAIL_FAIL,ORDER_DETAIL_SUCCESS,
    ORDER_PAY_FAIL,ORDER_PAY_REQUEST,ORDER_PAY_RESET,ORDER_PAY_SUCCESS
} from '../constants/orderConstant'
import {createOrderAxios} from '../config/axios'

//order, getState,
// userinfo
// config
// axios post , order , config
// dispatch data data

export const createOrder = (order) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_CREATE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await createOrderAxios.post(`/`, order, config)

        dispatch({
            type: ORDER_CREATE_SUCCESS,
            payload: data,
        })

    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload: message,
        })
    }
}

// getOrderDetails
export const getOrderDetails = (id) => async (dispatch, getState) => {
    dispatch({type:ORDER_DETAIL_REQUEST})
    const {
        userLogin: { userInfo },
    } = getState()
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`,
        },
    }

    try{
        const { data } = await createOrderAxios.get(`/${id}`, config)
        dispatch({type:ORDER_DETAIL_SUCCESS,payload:data})
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        dispatch({
            type: ORDER_DETAIL_FAIL,
            payload: message,
        })
    }

}

// payOrder, orderid,paymentResult
export const payOrder = (orderid,paymentResult) => async (dispatch, getState) => {
    dispatch({type:ORDER_PAY_REQUEST})
    const {
        userLogin: { userInfo },
    } = getState()
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`,
        },
    }

    try{
        const { data } = await createOrderAxios.put(`/${orderid}/pay`, paymentResult, config)
        dispatch({type:ORDER_PAY_SUCCESS})
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        dispatch({
            type: ORDER_PAY_FAIL,
            payload: message,
        })
    }

}
