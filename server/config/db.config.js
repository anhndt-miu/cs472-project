import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(process.env.APPSETTING_AZURE_COSMOS_CONNECTIONSTRING, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log('Connected to MongoDB');
        }
    } catch (error) {
        console.error('Could not connect to MongoDB:', error);
        process.exit(1);
    }
};

export default connectDB