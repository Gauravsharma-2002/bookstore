import Mongoose, { Schema } from "mongoose"

const CustomerSchema = new Mongoose.Schema(
    {
        watchList: [
            {
                type: Schema.Types.ObjectId,
                ref: "Book",
            },
        ],
        cart: [
            {
                type: Schema.Types.ObjectId,
                ref: "Book",
            },
        ],
        detail: [{ type: Schema.Types.ObjectId, ref: "User" }],
    },
    { timestamps: true }
)
export const Customer = Mongoose.model("Customer", CustomerSchema)
