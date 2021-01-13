import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/"
axios.defaults.headers.get['Accept'] = 'application/json'
axios.defaults.headers.post['Accept'] = 'application/json'

export const ProductListAxios = axios.create({
    baseURL:"/api/products",
})

export const UserLoginAxios = axios.create({
    baseURL:'/api/users'
})

export const UserRegisterAxios = axios.create({
    baseURL:'/api/users'
})
export const UserDetailAxios = axios.create({
    baseURL:'/api/users'
})
export const createOrderAxios = axios.create({
    baseURL:'/api/orders'
})
export const ConfigAxios = axios.create({
    baseURL:'/api/config/paypal'

})