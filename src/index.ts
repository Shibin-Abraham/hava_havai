import express from "express";
import dotenv from "dotenv"
import { AppDataSource } from "./config/datasource";
import { getData } from "./routes/data";

dotenv.config()
const app = express()

app.use('/api', getData)

async function run() {
    try {
        const PORT = process.env.PORT || 3000
        await AppDataSource.initialize()
        app.listen(PORT, () => console.log(`App is running at http://localhost:${PORT}`))
    } catch (error) {
        console.log("Unable to connect to db", error)
    }
}
void run()