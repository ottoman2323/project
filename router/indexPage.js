const express = require('express')
const router = express.Router();
const {join} = require('path')


const data = require(join(__dirname, '..', 'fakeDB.json'))


router.get('/', (req,res)=>{
   try {
      res.render('site/main')
   } catch (error) {
      console.log(error)
      res.redirect('/')
   }
})


router.post('/', (req, res)=>{
   try {
      res.json(data)
   } catch (error) {
      console.log(error)
      res.json({
         message:'hata!'
      })
   }
})


module.exports = router