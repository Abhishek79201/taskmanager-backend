const mongoose = require('mongoose');
const dotenv = require('dotenv');



dotenv.config()

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useunifiedTopology: true,
        })
        console.log('MongoDb Connected')
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)

    }
}

module.exports = connectDb