import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_DETAIL_FAIL,
    PRODUCT_DETAIL_REQUEST,
    PRODUCT_DETAIL_SUCCESS
} from '../constants/productConstant'

import {ProductListAxios} from '../config/axios'

export const listProducts = () => async (dispatch) => {
    try{
        dispatch({type:PRODUCT_LIST_REQUEST})
        const {data} = await ProductListAxios.get('/')
        dispatch({type:PRODUCT_LIST_SUCCESS,payload:data})
        console.log(data,'saj')
    }catch (error) {
        dispatch({type:PRODUCT_LIST_FAIL,
            payload:error.response && error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}

export const listProductDetails = (id) =>  async (dispatch)  => {
    try{
        dispatch({type:PRODUCT_DETAIL_REQUEST})
        const {data:product} = await ProductListAxios.get(`/${id}`)
        console.log(product)
        dispatch({type:PRODUCT_DETAIL_SUCCESS,payload:product})
    }catch (error){
        dispatch({type:PRODUCT_DETAIL_FAIL,payload:error.response && error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}

