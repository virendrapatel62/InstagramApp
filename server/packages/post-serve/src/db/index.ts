import mongoose from 'mongoose';
import { postServeConfig } from '../config';

const connectDB = async () => {

    if (!postServeConfig.mongoDbUrl) {
        throw new Error("Db url missing");
    }

    try {
        await mongoose.connect(postServeConfig.mongoDbUrl)
        console.log('✅ MongoDB connected');
    } catch (error) {
        console.error('❌ MongoDB connection error:', error);
        process.exit(1); // Exit if DB connection fails
    }
};

export  { connectDB };
