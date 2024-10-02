const express = require('express')
const dotenv = require('dotenv')
const connectDb = require('./config/db')
const taskRoutes = require('./routes/taskRoutes')
const cors = require('cors')

dotenv.config()

connectDb()

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api', taskRoutes)

app.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message
    })
})

const PORT = process.env.PORT

app.listen(PORT, () => console.log('server is running on', PORT))
