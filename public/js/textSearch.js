// import area 
import { data } from '/js/getData.js'



const searchParent = document.querySelector('#searchParent')
const searchElement = document.querySelector('#searchElement')
const dataListElement = document.querySelector('#dataListElement')


searchElement.addEventListener('focus', () => {
   searchParent.style.width = '70%';
   searchParent.style.border = '1px solid rgba(0, 0, 0, 0.3)';
})
searchElement.addEventListener('blur', () => {
   if (searchElement.value.length !== 0) {
      return
   }
   searchParent.style.width = '60%';
   searchParent.style.border = '1px solid rgba(0, 0, 0, 0.08)';
})


data.forEach((item) => {
   dataListElement.innerHTML += `<ul>
   <li><a href='single/${item.taxNO}'>${item.name}</a></li>
   <li>${item.lastName}</li>
   <li>${item.taxNO}</li>
   </ul>`
})


searchElement.addEventListener('keyup', (event) => {
   const keyword = event.target.value.trim().toLowerCase();

   const newData = data.filter((item) => {
      return item.taxNO.toString().toLowerCase().startsWith(keyword)
   })
   dataListElement.innerHTML = ``
   newData.forEach((item) => {
      dataListElement.innerHTML += `<ul>
      <li><a href='single/${item.taxNO}'>${item.name}</a></li>
      <li>${item.lastName}</li>
      <li>${item.taxNO}</li>
      </ul>`
   })
})