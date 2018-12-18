import React from 'react'
import PropTypes from 'prop-types'

// Components
import Icon from '../helpers/icon'
import Iter from './iter'
// logic
import { handleArrowKey, Container } from './drawerLogic'
// helper
import { nothing } from '../utils/helpers'
// assets [icons]
import leftIcon from '../../assets/left-arrow.svg'
import rightIcon from '../../assets/right-arrow.svg'

// default Classes
const defaultClasses = {
  root: 'gap-right gap-left',
  checked: 'select__checked',
  normal: 'select__normal',
  neighbor: 'select__neighbor',
  hide: 'no-visible',
}

const Drawer = Container(
  ({ classes, dec, focused, inc, index, toggle, ...iterprops }) => (
    <div
      tabIndex="0"
      className="c--drawer__wrapper"
      onKeyDown={handleArrowKey(focused, dec, inc)}
      onClick={toggle}
    >
      <Icon
        alt="left arrow icon"
        className="gap-right"
        onClick={dec}
        src={leftIcon}
      />
      <Iter
        classes={classes || defaultClasses}
        selectedIndex={index}
        {...iterprops}
      />
      <Icon
        alt="right arrow icon"
        className="gap-left"
        onClick={inc}
        src={rightIcon}
      />
    </div>
  ),
)

Drawer.propTypes = {
  classes: PropTypes.shape({}),
  onChange: PropTypes.func,
}
Drawer.defaultProps = {
  classes: null,
  onChange: nothing,
}

export default Drawer
