import React from 'react'
import PropTypes from 'prop-types'
// helper
import { nothing } from '../utils/helpers'

/* Icon */
const Icon = ({ src, width, className, alt, onClick }) => (
  <img
    src={src}
    width={width}
    className={className}
    alt={alt}
    onClick={onClick}
  />
)

Icon.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  width: PropTypes.string,
}
Icon.defaultProps = {
  alt: "ICON COMPONENT",
  className: '',
  onClick: nothing,
  width: "20px",
}

export default Icon
