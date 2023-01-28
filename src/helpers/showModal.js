export const toggleModal = (modal) => {
  document.querySelector(modal).classList.toggle('hidden')
  document.querySelector(modal).classList.toggle('flex')
}
