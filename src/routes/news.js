import express from 'express'
import newController from '../app/controllers/NewController.js'

const router = express.Router()

router.use('/', newController.index)

export default router
