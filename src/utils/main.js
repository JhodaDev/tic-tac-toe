export const handleActivePlayer = (e) => {
  const currentElement = e.currentTarget
  const classList = currentElement.classList
  if (!classList.contains('active')) {
    document.querySelector('.active').classList.remove('active')
    classList.add('active')
  }
}
