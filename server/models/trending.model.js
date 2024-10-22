import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/crud')

const  dictionarySchema = new mongoose.Schema({
    word: { type: String, required: true },
    wordtype: { type: String, required: true },
    definition: { type: String, required: true },
    counter: { type: String, required: true }
}, { timestamps: true });


export default mongoose.model('trending', dictionarySchema)