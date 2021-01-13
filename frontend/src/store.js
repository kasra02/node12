import {createStore,applyMiddleware,combineReducers} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import {productListReducer,
    productSingleReducer
}  from './reducers/productReducer'

import {
    cartReducer
} from './reducers/cartReducer'

import {
    userLoginReducer,userRegisterReduccer,userDetailsReduccer,
    userUpdateProfileReducer
} from './reducers/userReducer'

import {orderCreateReducer,
    orderDetailsReducer,
    orderPayReducer
} from './reducers/orderReducer'

const reducers = combineReducers({
    productList:productListReducer,
    productDetails:productSingleReducer,
    cart:cartReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReduccer,
    userDetail:userDetailsReduccer,
    userUpdateProfile:userUpdateProfileReducer,
    orderCreate:orderCreateReducer,
    orderDetails:orderDetailsReducer,
    orderPay:orderPayReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItem') ? JSON.parse(localStorage.getItem('cartItem')) : []
const userLoginFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {}
const paymentMethodFromStorage = localStorage.getItem('paymentMethod') ? JSON.parse(localStorage.getItem('paymentMethod')) : ''

const initialState = {
    cart:{cartItems:cartItemsFromStorage,
        shippingAddress:shippingAddressFromStorage,paymentMethod:paymentMethodFromStorage},
    userLogin:{userInfo:userLoginFromStorage}
}

const middleware = [thunk]
const store = createStore(reducers,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store