const express = require('express')
const router = express.Router();



router.post('/', (req, res)=>{
   try {
      req.session.destroy()
      res.json({
         state:true,
         message:'Çıkış yapıldı'
      })
   } catch (error) {
      console.log(error)
      res.json({
         state:false,
         message:'bir hata oluştu'
      })
   }
})



module.exports = router