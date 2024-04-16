import mongoose from "mongoose";

const connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("connected to mongo db");
  } catch (e) {
    console.log(e);
  }
};
export default connectMongoDb;
