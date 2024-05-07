// İncluding packages
const express = require('express')
const dotenv = require('dotenv')
const {create} = require('express-handlebars')
const {join} = require('path')
const fileUpload = require('express-fileupload')
const db = require(join(__dirname, 'db.js'))
const expressSession = require('express-session')


// Default settings
dotenv.config()
const app = express()
db();
const half = 1000 * 60 * 30

// All Helpers 
const {controlText} = require(join(__dirname, 'helpers', 'control.js'))
const hbs = create({helpers:{
   controlText
}})



// Variables and arrays
const PORT = process.env.PORT || 4000;
let API_URL = process.env.API_URL || "http://127.0.0.1:5000";
const SECRET_VALUE = process.env.SECRET_VALUE || "smoke";


// Template engine
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars');
app.set('views', join(__dirname, 'views'))



// middleware setting
app.use(expressSession({
   secret:SECRET_VALUE,
   resave:false,
   saveUninitialized:true,
   cookie:{path:'/', maxAge:half, httpOnly:true}
}))
app.use(express.json())
app.use(fileUpload())
app.use(express.urlencoded({extended:false}))
app.use(express.static(join(__dirname, 'public')))

app.use((req, res, next)=>{
   const {userID} = req.session 

   if(userID){
      res.locals.user = true
   }
   else{
      res.locals.user = false
   }
   next()
})


// router including
const indexPage = require(join(__dirname, 'router', 'indexPage.js'))
const loginPage = require(join(__dirname, 'router', 'loginPage.js'))
const addPage = require(join(__dirname, 'router', 'addPage.js'))
const singlePage = require(join(__dirname, 'router', 'singlePage.js'))
const logoutPage = require(join(__dirname, 'router', 'logoutPage.js'))
const deletePage = require(join(__dirname, 'router', 'deletePage.js'))


// router usage
app.use('/', indexPage)
app.use('/login', loginPage)
app.use('/add', addPage)
app.use('/single', singlePage)
app.use('/logout', logoutPage)
app.use('/delete', deletePage)
app.use('*', (req, res)=>{
   res.render('site/404')
})


app.listen(PORT, ()=>{
   console.log(`Server is running ${API_URL}`)
})