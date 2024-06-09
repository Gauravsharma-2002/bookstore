import Mongoose, { Schema } from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const userSchema = new Mongoose.Schema(
    {
        userName: {
            type: String,
            trim: true,
            unique: true,
            required: true,
        },
        fullName: {
            type: String,
            lowercase: true,
            required: true,
        },
        email: {
            type: String,
            lowercase: true,
            required: true,
            unique: true,
            trim: true,
        },
        contactNumber: {
            type: Number,
            required: true,
        },
        password: {
            type: String,
            require: [true, " password is required"],
        },
        address: {
            type: String,
            lowercase: true,
        },
        refreshToken: {
            type: String,
        },
    },
    { timestamps: true }
)
// checking if password is updated or not while any sort of modification
userSchema.pre("save", async function (next) {
    // in here i this will contains the instance of userSchema
    if (!this.isModified("password")) return next() // on no change in password
    this.password = await bcrypt.hash(this.password, 10)
    next()
})
userSchema.methods.isPasswordCorrect = async function () {
    const isPasswordCorrect = await bcrypt.compare(password, this.password)
    return isPasswordCorrect
}
//creating access token
userSchema.methods.creatAccessToken = async function () {
    const accessToken = jwt.sign(
        {
            _id: this._id,
            password: this.password,
            email: this.email,
            userName: this.userName,
            date: Date.now(),
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_DURATION }
    )
    return accessToken
}
userSchema.method.createRefreshToken = async function () {
    const refreshToken = jwt.sign({
        _id: _id,
        password: this.password,
        email: this.email,
        date: Date.now(),
    },process.env.REFRESH_TOKEN_SECRET,{
        expiresIn:process.env.REFRESH_TOKEN_DURATION
    })
    return refreshToken;
}

export const User = Mongoose.model("User", userSchema)
