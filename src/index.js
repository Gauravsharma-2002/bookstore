import dotenv from "dotenv"
import { app } from "./app.js"
import ConnectDB from "../db/index.js"
dotenv.config({ path: "./env" })

ConnectDB()
    .then(() => {
        app.on("error", (err) => {
            console.log("Error occured while connecting to server")
            throw err
        })
        const server = app.listen(process.env.PORT || 8080, () => {
            console.log(
                `server running appropriately on PORT : ${process.env.PORT}`
            )
        })
    })
    .catch((err) => {
        console.log("Error occured while connecting to server")
        throw err
    })
