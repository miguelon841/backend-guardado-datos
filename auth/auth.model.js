const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('strictQuery', true);
 const userSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        unique: false
    },
    dateBirth:{
        type: Date,
        required: true,
        trim: true,
        unique: false
    },
    tel:{
        type: String,
        required: true,
        trim: true,
        unique: false
    },
    sign:{
        type: String,
        required: true,
        trim: true,
        unique: false
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true
    }
 },{
    timestamps: true
 });

 module.exports = userSchema;