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
    counter: { type: Number, default: 0 }
}, { timestamps: true });

dictionarySchema.index({ counter: -1, updatedAt: -1, createdAt: -1 });

export default mongoose.model('trending', dictionarySchema)