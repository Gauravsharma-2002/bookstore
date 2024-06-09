import Mongoose, { Schema } from "mongoose"

const authorSchema = new Mongoose.Schema({
    constructs: [
        {
            type: Schema.Types.ObjectId,
            ref: "Book",
        },
    ],
    details: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    ],
})
export const Author = Mongoose.model("Author", authorSchema)
