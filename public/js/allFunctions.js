const clearMessage = (element, second)=>{
   setTimeout(()=>{
      element.innerHTML = ''
   }, 1000 * second)
}

const timingReload = (second)=>{
   setTimeout(()=>{
      window.location.reload()
   }, 1000 * second)
}





export {clearMessage, timingReload}