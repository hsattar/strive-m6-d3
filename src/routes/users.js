import { Router } from 'express'
import { User } from '../db/model/index.js'

const usersRouter = Router()

usersRouter.route('/')
.get(async (req, res, next) => {
  try {
      const users = await User.findAll()
      res.send(users)
  } catch (error) {
      console.log(error)
  }  
})
.post(async (req, res, next) => {
    try {
        const user = await User.create(req.body)
        res.send(user)
    } catch (error) {
        console.log(error)
    }  
})

usersRouter.route('/:id')
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

export default usersRouter