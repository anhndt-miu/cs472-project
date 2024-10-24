import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

mongoose.connect(process.env.APPSETTING_AZURE_COSMOS_CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB!'))
    .catch((err) => console.error('Failed to connect to MongoDB', err));

const dictionarySchema = new mongoose.Schema({
    word: { type: String, required: true },
    wordtype: { type: String },
    definition: { type: String, required: true }
}, { timestamps: true });


export default mongoose.model('entries', dictionarySchema)