
import Dictionary from "../models/dictionary.model.js"

const dictionaryController = {
    search: async (req, res) => {
        try {
            const keyword = req.params.keyword
            const data = await Dictionary.find({ word: { $regex: `^${keyword}`, $options: 'i' } })
            if (!data) {
                return res.status(400).json({ msg: 'Not found' })
            }

            res.json(data)
        } catch (err) {
            res.status(500).json({ msg: err.message })
        }
    }
}

export default dictionaryController
