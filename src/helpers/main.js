export const handleActive = (e) => {
  let nexOrPrev = null
  const element = e.currentTarget
  const svg = element.querySelector('svg')
  const path = svg.querySelector('path')

  nexOrPrev = element.nextElementSibling ? element.nextElementSibling : element.previousElementSibling
  if (nexOrPrev.classList.contains('bg-select')) {
    const path2 = nexOrPrev.querySelector('svg').querySelector('path')
    nexOrPrev.classList.remove('bg-select')
    path2.setAttribute('fill', '#A8BFC9')
  }

  element.classList.add('bg-select')

  // obtener el path del svg y cambiarle el fill y el stroke
  path.setAttribute('fill', '#1F3540')
}

export const showModal = () => {
  const modal = document.querySelector('.modal')
  const modalParent = modal.parentElement
  modalParent.classList.remove('-z-20')
  modal.classList.remove('hidemodal')
}

export const closeModal = () => {
  const modal = document.querySelector('.modal')
  const modalParent = modal.parentElement
  modalParent.classList.add('-z-20')
  modal.classList.add('hidemodal')
}
