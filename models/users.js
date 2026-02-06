import mongoose from "mongoose";
import { minLength, required } from "zod/mini";


const userSchema =mongoose.Schema({
    name: {
        type: String,
        required: true, 
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true,
        minLength: 6
    },
    role: {
        type: String,
        enum: ["user","admin"], 
        default: "user"

    },
    isActive: {
        type: Boolean,
        default: true
    }
},
{
    timestamps: true,
    strict: true
}

);

const User=mongoose.model("User",userSchema);
export default User;
