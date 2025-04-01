import mongoose from "mongoose";

export const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log(`Connected database with ${mongoose.connection.host}`)
    } catch (error) {
        console.log('Database connection error:',error)
        //app does not proceed ahead during an error
        process.exit(1)
    }
}