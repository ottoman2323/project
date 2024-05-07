const express = require('express')
const router = express.Router()
const { join } = require('path')
const Users = require(join(__dirname, '..', 'schema', 'users.js'))
const {validateAFM} = require(join(__dirname, '..', 'help', 'control.js'))

// Helper method
const sendMessage = (res, state, message) => {
   res.json({
      state,
      message
   })
}


router.post('/', async(req, res) => {
   try {
      if(!res.locals.user){
         return sendMessage(res, false, 'Yetkisiz Erişim!')
      }
      if (!req.body) {
         return sendMessage(res, false, 'Veri iletilemedi!')
      }

      const { name, lastName, email, phone, taxNO, idNO, IBAN, motherName, fatherName, birthDay, address, county, city, postCode } = req.body

      if (!name || !lastName || !email || !phone || !taxNO || !idNO || !IBAN || !motherName || !fatherName || !birthDay || !address || !county || !city || !postCode) {
         return sendMessage(res, false, 'Veri iletilmedi!')
      }

      if (!validateAFM(taxNO)) {
         return sendMessage(res, false, 'Vergi numarası hatalı')
      }

      const users = new Users({
         ...req.body
      })
      users.save().then(() => {
         return sendMessage(res, true, 'Kişi başarılı bir şekilde kayıt edildi!')
      })
      .catch((err)=>{
         console.log(err)
         return sendMessage(res, false, 'Bir hata oluştu!')
      })

   } catch (error) {
      console.log(error)
   }
})




module.exports = router