import PropTypes from 'prop-types'

export const Layout = ({ children, className }) => {
  return (
        <main className={`h-screen bg-dark-navy ${className || ''}`}>
            {children}
        </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}
