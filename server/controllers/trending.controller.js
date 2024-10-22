
import Trending from "../models/trending.model.js"

const  trendingController = {
    search: async (req, res) => {
        try {
            const data = await Trending.find()
            if(!data){
                return res.status(400).json({msg:'Not found'})
            }

            res.json(data)
        } catch (err) {
            res.status(500).json({ msg: err.message })
        }

    }
}

export default trendingController

