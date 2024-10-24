import trendingController from '../controllers/trending.controller.js'
import express from 'express'

const router = express.Router()

/**
 * @swagger
 * /word/trending:
 *   get:
 *     summary: Retrieve a list of trending items
 *     description:  Fetches a list of the currently trending words with their details.
 *     responses:
 *       200:
 *         description: A list of trending items, empty if no data found
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   word:
 *                     type: string
 *                     example: "Flower"
 *                   wordtype:
 *                     type: string
 *                     example: "n."
 *                   counter:
 *                     type: number
 *                     example: 1
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
    .get(trendingController.getTrending)

export default router