import { Router } from "express"
import { Product } from "../db/model/index.js"

const productsRouter = Router()

productsRouter.route('/')
.get(async (req, res, next) => {
    try {
        const product = await Product.findAll()
        res.send(product)
    } catch (error) {
        console.log(error)
    }
})
.post(async (req, res, next) => {
    try {
        const product = await Product.create(req.body)
        res.send(product)
    } catch (error) {
        console.log(error)
    }
})

productsRouter.route('/id')
.get(async (req, res, next) => {
    try {
        const product = await Product.findAll()
        res.send(product)
    } catch (error) {
        console.log(error)
    }
})
.delete(async (req, res, next) => {
    try {
        const product = await Product.findAll()
        res.send(product)
    } catch (error) {
        console.log(error)
    }
})
.post(async (req, res, next) => {
    try {
        const product = await Product.findAll()
        res.send(product)
    } catch (error) {
        console.log(error)
    }
})

export default productsRouter