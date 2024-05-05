const express = require('express')
const router = express.Router()
const { join } = require('path')
const Users = require(join(__dirname, '..', 'schema', 'users.js'))

// Helper method
const sendMessage = (res, state, message) => {
   res.json({
      state,
      message
   })
}

function validateAFM(afm) {
   if (!afm.match(/^\d{9}$/) || afm == '000000000')
      return false;

   var m = 1, sum = 0;
   for (var i = 7; i >= 0; i--) {
      m *= 2;
      sum += afm.charAt(i) * m;
   }

   return sum % 11 % 10 == afm.charAt(8);
}


router.post('/', (req, res) => {
   try {
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