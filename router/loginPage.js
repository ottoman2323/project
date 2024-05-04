const express = require('express')
const router = express.Router()


router.post('/', (req, res)=>{
   try {
      res.render('site/paying')
   } catch (error) {
      console.log(error)
      res.redirect('/404')
   }
})



module.exports = router