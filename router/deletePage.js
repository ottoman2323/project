const express = requrie('express');
const router = express.Router()

const sendMessage = (res, state, message)=>{
   res.json({
      state,
      message
   })
}


router.post('/', (req, res)=>{
   try {
      sendMessage(res, true, 'İşlem devam ediyor')
   } catch (error) {
      console.log(error);
      sendMessage(res, false, 'hata!')
   }
})


module.exports = router