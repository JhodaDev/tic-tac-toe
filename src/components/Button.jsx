import PropTypes from 'prop-types'

const typeButtons = {
  primary: 'bg-light-yellow shadow-yellow hover:bg-light-yellow-hover',
  secondary: 'bg-light-blue shadow-blue hover:bg-light-blue-hover',
  gray: 'bg-silver shadow-gray hover:bg-silver-hover'
}

export const Button = ({ children, type, onClick }) => {
  return (
    <button className={`w-full py-4 rounded-xl transition-colors text-dark-navy font-bold ${typeButtons[type]}`} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func
}
