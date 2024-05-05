const mongoose = require('mongoose');
const Schema = mongoose.Schema 

const usersSchema = new Schema({
   name:{type:String, require},
   lastName:{type:String, require},
   email:{type:String, require},
   phone:{type:String, require},
   taxNO:{type:String, require},
   idNO:{type:String, require},
   IBAN:{type:String, require},
   motherName:{type:String, require},
   fatherName:{type:String, require},
   birthDay:{type:String, require},
   address:{type:String, require},
   county:{type:String, require},
   city:{type:String, require},
   postCode:{type:String, require}
})

const Users = mongoose.model('Users', usersSchema);
module.exports = Users