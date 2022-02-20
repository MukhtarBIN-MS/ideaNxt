import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    Firstname:{
        type:String,
        require:true,
        min:3,
        max:20,
       
    },
    Lastname:{
        type:String,
        require:true,
        min:3,
        max:20,
       
    },
    Phone:{
        type:Number,
        require:true,

    },
    Company:{
        type:String,
        require:true,
        min:3,
        max:20,
       
    },
    Designation:{
        type:String,
        require:true,
        min:3,
        max:20,
       
    },
    Department:{
        type:String,
        require:true,
        min:3,
        max:20,
       
    },
    Email:{
        type:String,
        required:true,
        max:50,
       
    },
    Address:{
        type:String,
        require:true,
        min:3,
        max:20,     
    },
    Country:{
        type:String,
        require:true,
        min:3,
        max:20,
       
    },
    Section:{
        type:String,
        require:true,
        min:3,
        max:20,
       
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
},
{timestamps:true}
);

const userModel = mongoose.model('UserModel', userSchema);

export default userModel;