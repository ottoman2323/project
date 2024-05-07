let data = [];

const response = await fetch('/', {method:'post'});
const values = await response.json();

if(typeof(values) !== 'object'){
   console.log('Sunucu tarafında veri okuma işlemi esnasında bir hata oluşmuş!')
}
else{
   data = values
}


export {data}