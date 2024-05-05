const openAddButtons = document.querySelectorAll('.openAddButtons');
const addModal = document.querySelectorAll('.addModal');
const addModalWrapper = document.querySelectorAll('.addModalWrapper');
const closeAddButtons = document.querySelectorAll('.closeAddButtons');



openAddButtons.forEach((openButtonElement) => {
   openButtonElement.addEventListener('click', () => {
      addModal.forEach((modalElement) => {
         modalElement.style.zIndex = '10'
      })
      setTimeout(() => {
         addModalWrapper.forEach((modalWrapperElement) => {
            modalWrapperElement.style.opacity = '1'
         })
      }, 300)
   })
})



closeAddButtons.forEach((closeButtonElement) => {
   closeButtonElement.addEventListener('click', () => {
      addModalWrapper.forEach((modalWrapperElement) => {
         modalWrapperElement.style.opacity = '0'
      })
      setTimeout(() => {
         addModal.forEach((modalElement) => {
            modalElement.style.zIndex = '-10'
         })
      }, 500)
   })
})