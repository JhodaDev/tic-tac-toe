import ReactDOM from 'react-dom'

export const ModalPortal = ({ children }) => {
  return (
    ReactDOM.createPortal(children, document.getElementById('modal'))
  )
}
