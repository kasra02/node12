import express  from 'express'
import dotenv  from 'dotenv'
import colors from 'colors'
import connectDB from "./config/db.js";
import productRouter from './router/productRouters.js'
import userRouter from './router/userRouters.js'
import orderRouters from "./router/orderRouters.js";
import {notFound,errorHandler} from './middleware/errorMiddleware.js'

const app = express()

dotenv.config()

connectDB()

const port = process.env.PORT || 5000
app.use(express.json())
app.use('/api/products',productRouter)
app.use('/api/users',userRouter)
app.use('/api/orders',orderRouters)
app.get('/api/config/paypal',((req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID)
}))

app.use(notFound)
app.use(errorHandler)


app.listen(port,()=>{
    console.log(`server run on ${process.env.NODE_ENV} ${port}`.cyan.underline)
})

