import mongoose from "mongoose"


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://akashneharkar8587:Caliber$8588@cluster0.s66ac8m.mongodb.net/TOMATO').then(()=>console.log("DB connected!"));
}