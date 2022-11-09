const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")

const SERVER_PORT = 5500

const app = express()

mongoose.connect("mongodb://localhost:27017/DB_JWT", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => { console.log("DB connection Success!") })

app.use(cors({
    origin: ["http://localhost:3000"],
    method: ["GET", "POST"],
    credentials: true
}))

app.use(express.json())

app.listen(SERVER_PORT, () => {
    console.log(`Server UP na porta ${SERVER_PORT}`)
})