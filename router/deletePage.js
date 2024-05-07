const express = require('express');
const router = express.Router()
const {join} = require('path')
const Users = require(join(__dirname, '..', 'schema', 'users.js'))


const sendMessage = (res, state, message) => {
   res.json({
      state,
      message
   })
}


router.get('/:taxNO', async(req, res) => {
   try {
      if(!req.params){
         return sendMessage(res, false, 'Data not sending!')
      }
      const {taxNO} = req.params 

      if(!taxNO){
         return sendMessage(res, false, 'Data not sending!')
      }

      const userControl = await Users.find({taxNO}).exec();

      if(userControl.length === 0){
         return sendMessage(res, false, 'Person not found!')
      }

      Users.deleteOne({taxNO}).then(()=>{
         return sendMessage(res, true, 'The contact was successfully deleted')
      }).catch((err)=>{
         console.log(err)
         return sendMessage(res, false, 'Something went wrong')
      })
      
   } catch (error) {
      console.log(error);
      sendMessage(res, false, 'hata!')
   }
})


module.exports = router