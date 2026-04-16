import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoutes.js'
import orderRouter from './routes/orderRoute.js'
import emailRouter from './routes/emailRoute.js'
import mpesaRouter from './routes/mpesaRoute.js'
import imageRouter from './routes/imageSubmissionRoutes.js'

//App Config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

//middlewares
app.use(express.json());
app.use(cors());  

// api endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);
app.use('/api/email', emailRouter); 
app.use('/api/mpesa', mpesaRouter);
app.use('/api/image', imageRouter); 


app.get('/', (req, res) => {
    res.send("The  Server is Up and  Running")
})
app.listen(port, ()=> console.log('Server started on PORT : '+ port))
