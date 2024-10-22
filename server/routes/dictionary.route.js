import dictionaryController from '../controllers/dictionary.controller.js'
import express from 'express'

const router = express.Router()

router.route('/:keyword')
    .get(dictionaryController.search)

export default router