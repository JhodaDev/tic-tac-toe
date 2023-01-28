import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'

export const Modal = ({ children, id, ...rest }) => {
  return (
    createPortal(<motion.div {...rest} className={'absolute w-full h-screen left-0 top-0 bg-dark justify-center items-center flex'} id={id} >
      {children}
    </motion.div>, document.getElementById('modal'))
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired
}
