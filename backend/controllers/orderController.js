import asyncHandler from 'express-async-handler'
import Order from "../models/orderModel.js";


const getMyOrders = asyncHandler(async(req,res)=>{
   res.send(req.user._id)
    // console.log(res.user._id)
    // const orders = await Order.find({user: req.user._id})
    // if(orders){
    //     res.status(201)
    //     res.send(orders)
    // }else{
    //     res.status(404)
    //     throw new Error('nothing to fetch')
    // }
})

const addOrderItems = asyncHandler(async (req,res)=>{

    // destructure data from req
    const {orderItems,shippingAddress,paymentMethod,totalPrice,shippingPrice,taxPrice,itemsPrice} = req.body

    // check for order length
    if(orderItems && orderItems ===0) {
        res.status(400)
        throw new Error('no item to order')
        // return
    }else{

        // create order

        try{
            const order = new Order({
                user : req.user._id,
                orderItems,
                paymentMethod,
                taxPrice,
                shippingPrice,
                itemsPrice,
                totalPrice,
                shippingAddress

            })
            const createdOrder = await order.save()
            res.status(201).json(createdOrder)
        }catch (error) {
            res.status(400)
            throw new Error('about saving')
        }

    }
})

// getOrderById populate user, name email
const getOrderById = asyncHandler(  async (req,res) => {
    // get order by id and populate with user name email
    const order = await Order.findById(req.params.id).populate('user' , 'name email')

    if(order){
        res.status(201).json(order)
    }else{
        res.status(404)
        throw new Error('no order find')
    }
})

// update order to paid :id/pay updateOrderToPaid
const updateOrderToPaid = asyncHandler(async (req,res)=>{

    const order = await Order.findById(req.params.id)
    if(order){
        order.isPaid = true
        order.paidAt = Date.now()
        order.paymentResult = {
            id: req.body.id,
            status:req.body.status,
            update_time:req.body.update_time,
            email_address: req.body.payer.email_address
        }
        const updatedOrder = await order.save()
        res.status(200)
        res.json(updatedOrder)
    }else{
        res.status(404)
        throw new Error('order not found')
    }
})




export {addOrderItems,getOrderById,updateOrderToPaid,getMyOrders}