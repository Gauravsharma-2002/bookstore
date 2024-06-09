import  Mongoose,{Schema}  from "mongoose";

const publisherSchema = new Mongoose.Schema({
    publish:[{
        type:Schema.Types.ObjectId,
        ref:"Book"
    }],
    details:[
        {
            type:Schema.Types.ObjectId,
            ref:"User"
        }
    ]
})
export const Publisher = Mongoose.model("Publisher",publisherSchema)