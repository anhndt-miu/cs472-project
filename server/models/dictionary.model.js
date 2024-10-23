import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB!'))
    .catch((err) => console.error('Failed to connect to MongoDB', err));

const dictionarySchema = new mongoose.Schema({
    word: { type: String, required: true },
    wordtype: { type: String, required: true },
    definition: { type: String, required: true }
}, { timestamps: true });


export default mongoose.model('entries', dictionarySchema)