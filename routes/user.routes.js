import Router from 'express'
import bodyParser from "body-parser"
const urlencodedParser = bodyParser.urlencoded({extended: false})

const router = new Router()
import userController from '../controllers/user.controller.js'

router.post('/user', userController.createUser)
router.get('/user', userController.getUsers)
router.get('/user/:id', userController.getOneUser)
router.put('/user', userController.updateUser)
router.delete('/user/:id', userController.deleteUser)

router.post('/', urlencodedParser, userController.createBooking)

export default router