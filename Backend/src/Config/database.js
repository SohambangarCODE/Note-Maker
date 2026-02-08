const mongoose = require('mongoose')

function connectToDB(){
    mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("successfully connected to mongodb")
})
}


module.exports = connectToDB
