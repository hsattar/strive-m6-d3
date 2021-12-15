import express from 'express'
import cors from 'cors'
import { testDBConnection } from './db/connection.js'

const server = express()
const port = process.env.PORT || 3001

server.use(express.json())
server.use(cors())

server.listen(port, () => {
    console.log(`Server Running on Port ${port}`)
    testDBConnection()
})