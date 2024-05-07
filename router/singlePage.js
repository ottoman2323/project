const express = require('express')
const router = express()
const {join} = require('path')
const Users = require(join(__dirname, '..', 'schema', 'users.js'))



router.get('/:taxNO', async(req, res)=>{
   try {
      const {taxNO} = req.params
      const userControl = await Users.find({taxNO}).exec();
      res.render('site/single', {
         data:userControl.map(item=>item.toJSON())
      });
      
   } catch (error) {
      console.log(error)
      res.redirect('/error')
   }
})



module.exports = router