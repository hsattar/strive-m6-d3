import { Router } from "express"
import { Product, Review } from "../db/model/index.js"
import { Op } from 'sequelize'

const productsRouter = Router()

productsRouter.route('/')
.get(async (req, res, next) => {
    try {
        const product = await Product.findAll({ 
            include: Review,
            where: {
                ...(req.query.search && {
                    [Op.or]: [
                        {
                            name: { [Op.iLike]: `%${req.query.search}%` }
                        },
                        {
                            description: { [Op.iLike]: `%${req.query.search}%` }
                        }
                    ]
                }),
                ...(req.query.price && {
                    price: {
                        [Op.between] : req.query.price.split(',')
                    }
                })
            },
            order: [['name', 'ASC']]
        })
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

productsRouter.route('/:id')
.get(async (req, res, next) => {
    try {
        const product = await Product.findByPk(req.params.id)
        if (product) return res.send(product)
        res.status(404).send('Not Found')
    } catch (error) {
        console.log(error)
    }
})
.put(async (req, res, next) => {
    try {
        const updatedProduct = await Product.update(req.body, {
            where: { id: req.params.id },
            returning: true
        })
        res.send(updatedProduct[1][0])
    } catch (error) {
        console.log(error)
    }
})
.delete(async (req, res, next) => {
    try {
        const result = await Product.destroy({ where: {
            id: req.params.id
        }})
        if (result > 0) return res.status(204).send()
        res.status(404).send('Not Found')
    } catch (error) {
        console.log(error)
    }
})

export default productsRouter