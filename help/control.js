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



module.exports = {validateAFM}