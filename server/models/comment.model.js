import mongoose, {Schema, model } from 'mongoose'

const commentSchema = new Schema({
    name : {
        type : String,
        required: true
    },
    content : {
        type : String,
        required : true
    },
    blog:{
        type : mongoose.Schema.Types.ObjectId,
        ref: "blog",
        required : true
    }
},
{
    timestamps : true
})

export const Comment = model('Comment', commentSchema)