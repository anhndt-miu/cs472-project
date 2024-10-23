
import Dictionary from "../models/dictionary.model.js"
import Trending from "../models/trending.model.js"

const dictionaryController = {
    search: async (req, res) => {
        try {
            const keyword = req.params.keyword
            // const data = await Dictionary.find({ word: { $regex: `^${keyword}`, $options: 'i' } })
            const data = await Dictionary.find({ word: { $regex: `^${keyword}$`, $options: 'i' } })
            if (!data) {
                return res.status(400).json({ msg: 'Not found' })
            }

            if (data.length > 0) {
                const word = data[0]
                Trending.findOneAndUpdate(
                    word._id,
                    { $inc: {  counter: 1 }, word: word.word },
                    { new: true, upsert: true }
                ).then((data) => {
                    console.log('updated ' + data)
                })
            }
            res.status(200).json(data)
        } catch (err) {
            res.status(500).json({ msg: err.message })
        }
    }
}

export default dictionaryController
