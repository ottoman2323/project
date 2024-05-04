const searchParent = document.querySelector('#searchParent')
const searchElement = document.querySelector('#searchElement')
const dataListElement = document.querySelector('#dataListElement')
let searchControl = true

searchElement.addEventListener('focus', ()=>{
   searchParent.style.width = '70%';
   searchParent.style.border = '1px solid rgba(0, 0, 0, 0.3)';
})
searchElement.addEventListener('blur', ()=>{
   if(searchElement.value.length !== 0){
      return
   }
   searchParent.style.width = '60%';
   searchParent.style.border = '1px solid rgba(0, 0, 0, 0.08)';
})

let data = []

fetch('/', {
   method:'post'
}).then(response=>response.json())
.then((res)=>{
   data = res
   res.forEach((item)=>{
      dataListElement.innerHTML += `<ul>
      <li>${item.name}</li>
      <li>${item.lastName}</li>
      <li>${item.vergiNO}</li>
      </ul>`
   })
})

searchElement.addEventListener('keyup', (event)=>{
   const keyword = event.target.value.trim().toLowerCase();

   const newData = data.filter((item)=>{
      return item.vergiNO.toString().toLowerCase().startsWith(keyword)
   })
   dataListElement.innerHTML = ``
   newData.forEach((item)=>{
      dataListElement.innerHTML += `<ul>
      <li>${item.name}</li>
      <li>${item.lastName}</li>
      <li>${item.vergiNO}</li>
      </ul>`
   })
})