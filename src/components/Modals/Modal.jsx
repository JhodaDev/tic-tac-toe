import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'

export const Modal = ({ children, id }) => {
  return (
    createPortal(<div className={'absolute w-full h-screen left-0 top-0 bg-dark justify-center items-center hidden'} id={id} >
      {children}
    </div>, document.getElementById('modal'))
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired
}
