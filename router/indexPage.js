const express = require('express')
const router = express.Router();
const {join} = require('path')
const Users = require(join(__dirname, '..', 'schema' ,'users.js'))

const data = require(join(__dirname, '..', 'fakeDB.json'))


router.get('/', async(req,res)=>{
   try {
      res.render('site/main')
   } catch (error) {
      console.log(error)
      res.redirect('/')
   }
})


router.post('/', async(req, res)=>{
   try {
      const findData = await Users.find().exec()
      res.json(findData)
   } catch (error) {
      console.log(error)
      res.json({
         message:'hata!'
      })
   }
})


module.exports = router