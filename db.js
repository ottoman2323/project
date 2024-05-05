const mongoose = require('mongoose')
require('dotenv').config()



const DB_URL = process.env.DB_URL || "mongodb://localhost:27017";

const conn = ()=>{
   mongoose.connect(DB_URL, {
      dbName:'smoke'
   }).then(()=>{
      console.log('DB connected')
   })
   .catch((err)=>{
      console.log(err)
   })
}

module.exports = conn()