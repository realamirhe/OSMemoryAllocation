import React from 'react'
import PropTypes from 'prop-types'
// components
import Container from './allocatorLogic'
import Icon from '../helpers/icon'
// helper
import { nothing } from '../utils/helpers'
// assets [icons]
import remove from '../../assets/remove.svg'
import add from '../../assets/add.svg'

/* Allocator */
const Allocator = Container(
  ({ size, increment, decrement, minSize, maxSize }) => (
    <div>
      <Icon
        alt="Minus Icon"
        className="gap-right"
        onClick={decrement}
        src={remove}
      />
      {size}
      <Icon
        alt="Minus Icon"
        className="gap-left"
        onClick={increment}
        src={add}
      />
    </div>
  ),
)

Allocator.propTypes = {
  maxSize: PropTypes.number.isRequired,
  minSize: PropTypes.number.isRequired,
  onChange: PropTypes.func,
}

Allocator.defaultProps = {
  onChange: nothing,
}
export default Allocator
