const openeditButtons = document.querySelectorAll('.openeditButtons');
const editModal = document.querySelectorAll('.editModal');
const editModalWrapper = document.querySelectorAll('.editModalWrapper');
const closeeditButtons = document.querySelectorAll('.closeeditButtons');



openeditButtons.forEach((openButtonElement) => {
   openButtonElement.addEventListener('click', () => {
      editModal.forEach((modalElement) => {
         modalElement.style.zIndex = '10'
      })
      setTimeout(() => {
         editModalWrapper.forEach((modalWrapperElement) => {
            modalWrapperElement.style.opacity = '1'
         })
      }, 300)
   })
})



closeeditButtons.forEach((closeButtonElement) => {
   closeButtonElement.addEventListener('click', () => {
      editModalWrapper.forEach((modalWrapperElement) => {
         modalWrapperElement.style.opacity = '0'
      })
      setTimeout(() => {
         editModal.forEach((modalElement) => {
            modalElement.style.zIndex = '-10'
         })
      }, 500)
   })
})