const express = require('express')
const router = express()




router.get('/:taxNO', (req, res)=>{
   try {
      res.render('site/single');
      
   } catch (error) {
      console.log(error)
      res.redirect('/error')
   }
})



module.exports = router