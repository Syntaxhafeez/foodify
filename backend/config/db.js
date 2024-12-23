import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://syntaxhafeez:cNq5YshSLsb7DBKq@cluster0.ohcoo.mongodb.net/food-del').then(() => console.log("DB Connected"));

}