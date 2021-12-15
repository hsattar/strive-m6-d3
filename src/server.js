import express from 'express'
import cors from 'cors'
import sequelize, { testDBConnection } from './db/connection.js'

const server = express()
const port = process.env.PORT || 3001

server.use(express.json())
server.use(cors())

server.listen(port, async () => {
    console.log(`Server Running on Port ${port}`)
    testDBConnection()
    await sequelize.sync({ force: true })
})