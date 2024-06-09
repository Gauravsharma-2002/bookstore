import Mongoose,{Schema} from "mongoose"

const bookSchema = new Mongoose.Schema({
    name:{
        type:String,
        required: true,

    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    pages:{
        type:Number,
        required: true
    },
    publishDate:{
        type:Date,
        required:true,
    },
    content:{
        type:String,
        
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },

    Publisher:{
        type:Schema.Types.ObjectId,
        ref:"User"

    }


})

export const Book = Mongoose.model("Book",bookSchema)