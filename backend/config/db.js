import mongoose from 'mongoose'

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            useCreateIndex:true
        })
        console.log(`mongo db connect ${conn.connection.host}`.cyan.underline)
    }catch (error) {
        console.log(`Error with db: ${error.message}`.red.underline)
        process.exit(1)
    }
}
export default connectDB