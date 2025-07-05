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
        ref: "Blog",
        required : true
    },
    isApproved :{
        type: Boolean,
        default : true
    }
},
{
    timestamps : true
})

export const Comment = model('Comment', commentSchema)