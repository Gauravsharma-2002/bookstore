import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"

const ConnectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MOONGODB_URI}/${DB_NAME}`
        )
        console.log(
            `Sucessful connection established with DB : ${connectionInstance.connection.host}`
        )
    } catch (error) {
        console.log(`Error while connecting to DB`, error)
        process.exit(1)
    }
}
export default ConnectDB
