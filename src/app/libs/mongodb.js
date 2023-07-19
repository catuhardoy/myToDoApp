import mongoose from "mongoose";

const connectMongoDB = async () => {
    try{
        // await mongoose.connect(process.env.MONGODB_URI);
        await mongoose.connect('mongodb+srv://catalinahardoy:admin@cluster0.pohmvyb.mongodb.net/todo?retryWrites=true&w=majority');

        console.log('connected')
    }
    catch(error){
        console.log(error)
    }
}

export default connectMongoDB;