import { Router } from 'express'
import { Cart } from '../db/model/index.js'

const cartRouter = Router()

cartRouter.route('/')
.get(async (req, res, next) => {
    try {
        const items = await Cart.findAll()
        res.send(items)
    } catch (error) {
        console.log(error)
    }
})
.post(async (req, res, next) => {
    try {
        const item = await Cart.create(req.body)
        res.send(item)
    } catch (error) {
        console.log(error)
    }
})

cartRouter.route('/:id')
.get(async (req, res, next) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
})
.put(async (req, res, next) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
})
.delete(async (req, res, next) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
})

export default cartRouter