
import Trending from "../models/trending.model.js"
import dotenv from 'dotenv'

dotenv.config();

const trendingController = {
    getTrending: async (req, res) => {
        try {
            const data = await Trending.find().sort({ counter: -1, updatedAt: -1 , createdAt: -1}).limit(process.env.LIMIT_PER_RQ)
            if (!data) {
                return res.status(400).json({ msg: 'Not found' })
            }

            res.status(200).json(data)
        } catch (err) {
            res.status(500).json({ msg: err.message })
        }

    }
}

export default trendingController

