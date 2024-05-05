const mongoose = require('mongoose')
require('dotenv').config()

const conn = () =>{
    mongoose.connect(process.env.DB_URL, {
        dbName:'smoke'
    })
    .then(()=>{
        console.log('Veri tabanına bağlanıldı')
    })
    .catch((err)=>{console.log(err)})
}


module.exports = conn