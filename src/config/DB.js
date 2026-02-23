const mongoose = require('mongoose')

exports.connectedDB = async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URI}`)
        console.log("Database Connected")
    } catch (error) {
        console.error(error.message)
    }
}

