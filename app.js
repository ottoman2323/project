// İncluding packages
const express = require('express')
const dotenv = require('dotenv')
const {engine} = require('express-handlebars')
const {join} = require('path')
const fileUpload = require('express-fileupload')
const db = require(join(__dirname, 'db.js'))

// Default settings
dotenv.config()
const app = express()
db();

// Variables and arrays
const PORT = process.env.PORT || 4000;
let API_URL = process.env.API_URL || "http://127.0.0.1:5000";



// Template engine
app.engine('handlebars', engine())
app.set('view engine', 'handlebars');
app.set('views', join(__dirname, 'views'))



// middleware setting
app.use(express.json())
app.use(fileUpload())
app.use(express.urlencoded({extended:false}))
app.use(express.static(join(__dirname, 'public')))


// router including
const indexPage = require(join(__dirname, 'router', 'indexPage.js'))
const loginPage = require(join(__dirname, 'router', 'loginPage.js'))
const addPage = require(join(__dirname, 'router', 'addPage.js'))


// router usage
app.use('/', indexPage)
app.use('/login', loginPage)
app.use('/add', addPage)
app.use('*', (req, res)=>{
   res.render('site/404')
})


app.listen(PORT, ()=>{
   console.log(`Server is running ${API_URL}`)
})