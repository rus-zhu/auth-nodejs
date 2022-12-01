const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000
const authRouter = require('./authRouter')
const password = require('./token')

const app = express()

app.use(express.json())
app.use("/auth", authRouter)

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://qwerty:${password}@cluster0.gl5kbpi.mongodb.net/?retryWrites=true&w=majority`)
            app.listen(PORT, () => console.log(`server started in port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()