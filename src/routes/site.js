import express from 'express'
import siteController from '../app/controllers/SiteController.js'

const router = express.Router()

router.use('/', siteController.index)

export default router
