import trendingController from '../controllers/trending.controller.js'
import express from 'express'

const router = express.Router()

router.route('/')
    .get(trendingController.search)

export default router