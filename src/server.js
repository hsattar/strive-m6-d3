import express from 'express'
import cors from 'cors'
import sequelize, { testDBConnection } from './db/connection.js'
import productsRouter from './routes/products.js'
import reviewsRouter from './routes/reviews.js'
import usersRouter from './routes/users.js'
import categoriesRouter from './routes/categories.js'

const server = express()
const port = process.env.PORT || 3001

server.use(express.json())
server.use(cors())

server.use('/users', usersRouter)
server.use('/products', productsRouter)
server.use('/reviews', reviewsRouter)
server.use('/categories', categoriesRouter)

server.listen(port, async () => {
    console.log(`Server Running on Port ${port}`)
    testDBConnection()
    await sequelize.sync({ logging: false })
})