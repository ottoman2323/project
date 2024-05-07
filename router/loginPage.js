const express = require('express')
const router = express.Router()
const {join} = require('path');
const Admin = require(join(__dirname, '..', 'schema', 'admin.js'))


const sendMessage = (res, state, message)=>{
   res.json({
      state, 
      message
   })
}


router.post('/', async(req, res)=>{
   try {
      if(!req.body){
         return sendMessage(res, false, 'Kullanıcı bilgileri iletilmedi!')
      }

      const {password} = req.body 


      if(!password){
         return sendMessage(res, false, 'Kullanıcı bilgileri iletilmedi singleData!')
      }

      const rgx = new RegExp(/[^a-zA-Z0-9]/, 'g')

      if(rgx.test(password)){
         return sendMessage(res, false, 'Sen hayırdır!')
      }

      if(password.length == 0 || password.length == 21){
         return sendMessage(res, false, 'Sen hayırdır!')
      }

      const passwordControl = await Admin.find({password}).exec();


      if(passwordControl.length === 0){
         return sendMessage(res, false, 'Şifre hatalıdır');
      }

      let ID = await passwordControl[0]._id;
      ID = String(ID)


      req.session.userID = ID
  

      return sendMessage(res, true, 'Giriş işlemleri başarılı yönlendiriliyorsunuz.')
   } catch (error) {
      console.log(error)
      res.redirect('/404')
   }
})



module.exports = router