const express   =   require("express")
const req = require("express/lib/request")
const rout  =   express.Router()
const Restaurant = require('../models/restaurantSchema')

//get all records
rout.get('/', async(req,res) => {
    try {
        console.log(res)
        const orders = await Restaurant.find()
        res.json(orders)
    } catch (error) {
        res.send(error)
    }
})

//get record only by specifying id
rout.get('/:id', async(req,res) => {
    try {
        
        const order = await Restaurant.findById(req.params.id)
        res.json(order)
    } catch (error) {
        res.send(error)
    }
})

//improve single records
rout.patch('/:id', async(req,res) => {
    try {
        const order = await Restaurant.findById(req.params.id)
        if (req.body.bill_amount) {
            order.bill_amount = req.body.bill_amount
        } else if (req.body.customer_order){
            order.customer_order = req.body.customer_order
        } else if (req.body.customer_name) {
            order.customer_name = req.body.customer_name
        }      
        const a1 = await order.save()
        res.json(a1)
    } catch (error) {
        res.send(error)
    }
}) 

//add a record
rout.post('/', async(req,res) => {
    console.log(req.body.customer_name)
    console.log(req.body.customer_order)
    console.log(req.body.bill_amount)
    const data = new Restaurant({
        customer_name : req.body.customer_name,
        customer_order : req.body.customer_order,
        bill_amount : req.body.bill_amount
    })
    try {
        const a1 = await data.save()
        res.send(a1)
    } catch (error) {
        console.log(error)
    }
})

//remove a record
rout.delete('/:id', async(req,res) => {
    const order = await Restaurant.findById(req.params.id)
    const a1 = await order.remove()
        res.json(a1)
})

module.exports = rout