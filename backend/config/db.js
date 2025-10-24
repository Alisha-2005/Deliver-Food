import mongoose from "mongoose";

export const connectDB = async () => {
            await mongoose.connect('mongodb+srv://DelUser:alishA.00@cluster0.ohbghzi.mongodb.net/DelivIt').then(()=> console.log("DB Connected"));

    }

    //mongodb+srv://DelUser:alishA.00@cluster0.ohbghzi.mongodb.net/?appName=Cluster0
    //mongodb+srv://DelUser:<db_password>@cluster0.ohbghzi.mongodb.net/?appName=Cluster0