const openLoginButtons = document.querySelectorAll('.openLoginButtons');
const closeLoginButtons = document.querySelectorAll('.closeLoginButtons');
const loginModal = document.querySelectorAll('.loginModal');
const wrapperModal = document.querySelectorAll('.wrapperModal');



// Helper function
const childElement = (elements, callBack) => {
   elements.forEach((element) => {
      callBack(element)
   })
}


childElement(openLoginButtons, (openElement) => {
   openElement.addEventListener('click', () => {
      childElement(loginModal, (loginElement) => {
         loginElement.style.zIndex = '10'
         setTimeout(() => {
            childElement(wrapperModal, (wrapperElement) => {
               wrapperElement.style.opacity = '1'
            })
         }, 200)
      })
   })
})


childElement(closeLoginButtons, (closeElement) => {
   closeElement.addEventListener('click', () => {
      childElement(wrapperModal, (wrapperElement) => {
         wrapperElement.style.opacity = '0'
         setTimeout(() => {
            childElement(loginModal, (loginElement) => {
               loginElement.style.zIndex = '-10'
            })
         }, 500)
      })
   })
})