import dictionaryController from '../controllers/dictionary.controller.js'
import express from 'express'

const router = express.Router()

/**
 * @swagger
 * /word:
 *   get:
 *     summary: Search for words in the dictionary
 *     description: Retrieves a list of words that match the search query. Each word contains details like its type and definition.
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         required: true
 *         description: The word to search for (e.g., "flower").
 *     responses:
 *       200:
 *         description: A list of words that match the search query, empty if no data found
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: "61234abcde56789f01234567"
 *                   word:
 *                     type: string
 *                     example: "Flower"
 *                   wordtype:
 *                     type: string
 *                     example: "n."
 *                   definition:
 *                     type: string
 *                     example: "In the popular sense, the bloom or blossom of a plant; then showy portion, usually of a different color, shape, and texture fromn the foliage.."
 *       400:
 *         description: Data not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Not found"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "An unexpected error occurred."
 */
router.route('/')
    .get(dictionaryController.search)

export default router