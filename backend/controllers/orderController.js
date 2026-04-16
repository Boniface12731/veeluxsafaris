import orderModel from "../models/orderModel.js";
import userModel from "../models/userModels.js";

// Placing orders using COD Method
const placeOrder = async (req,res) => {
    try {
        const { userId, items, amount, address} = req.body;
        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod:"COD",
            payment:false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()
        await userModel.findByIdAndUpdate(userId,{cartData:{}})
        res.json({success:true,message:"Booking Reserved"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}


// Placing orders using Stripe Method
const placeOrderStripe = async(req, res) => {

}

// Placing orders using RazorPay Method
const placeOrderRazorPay = async(req, res) => {

}

//All Orders data  for admin panel
const allOrders = async(req, res) => {
    try {
        const orders = await orderModel.find({})
        res.json({success:true,orders})
    } 
    catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})

    }
}

//All Orders data  for frontend panel
const userOrders = async(req, res) => {
    try {
        const { userId } = req.body
        const orders = await orderModel.find({ userId })
        res.json({success:true,orders})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

//update  order statusc from Admin Panel
const updateStatus = async(req, res) => {
    try {
        const { orderId, status } = req.body
        await orderModel.findByIdAndUpdate(orderId, { status })
        res.json({success:true,message:'Booking Status Updated'})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}
export {placeOrder, placeOrderStripe,placeOrderRazorPay,allOrders, userOrders, updateStatus}