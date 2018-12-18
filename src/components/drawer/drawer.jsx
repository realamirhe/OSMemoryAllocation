import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Components
import Icon from './icon'
import Iter from './iter'
// icons [assets]
import leftIcon from '../../assets/left-arrow.svg'
import rightIcon from '../../assets/right-arrow.svg'

const isKey = key => event =>
  (event.which || event.keyCode || event.charCode) === key

// default Classes
const defaultClasses = {
  root: 'gap-right gap-left',
  checked: 'select__checked',
  normal: 'select__normal',
  neighbor: 'select__neighbor',
  hide: 'no-visible',
}

class Drawer extends Component {
  constructor(props) {
    super(props)
    this.getFocused = false

    this.makeBlur = this.makeBlur.bind(this)
    this.makeFocus = this.makeFocus.bind(this)

    this.handleArrowKey = this.handleArrowKey.bind(this)
  }

  normalizeIndex(index, items = {}) {
    return index < 0 ? 0 : index < items.length ? index : items.length - 1
  }

  getComponent(items) {
    return items && typeof items[0] === 'string' ? 'p' : null
  }

  makeFocus() {
    this.getFocused = true
  }

  makeBlur() {
    this.getFocused = false
  }

  handleArrowKey(event) {
    const { leftIconHandler, rightIconHandler } = this.props
    console.log('this.getFocused', this.getFocused)
    console.log({ event })
    if (!this.getFocused) return
    if (isKey(37)(event)) leftIconHandler()
    if (isKey(39)(event)) rightIconHandler()
  }

  render() {
    const {
      classes,
      items,
      leftIconHandler,
      rightIconHandler,
      selectedIndex: index,
      withCheckMark,
    } = this.props

    const itemComponent = this.getComponent(items)
    const selectedIndex = this.normalizeIndex(index, items)

    return (
      <div
        zindex={0}
        className="c--drawer__wrapper"
        onClick={this.getFocused ? this.makeBlur : this.makeFocus}
        onFocus={this.makeFocus}
        onBlur={this.makeBlur}
        onKeyDown={this.handleArrowKey}
      >
        <Icon
          alt="left arrow icon"
          className="gap-right"
          onClick={leftIconHandler}
          src={leftIcon}
        />
        <Iter
          withCheckMark={withCheckMark}
          classes={classes || defaultClasses}
          itemComponent={itemComponent}
          items={items}
          selectedIndex={selectedIndex}
        />
        <Icon
          alt="right arrow icon"
          className="gap-left"
          onClick={rightIconHandler}
          src={rightIcon}
        />
      </div>
    )
  }
}

Drawer.propTypes = {
  classes: PropTypes.shape({}),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  leftIconHandler: PropTypes.func.isRequired,
  rightIconHandler: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  withCheckMark: PropTypes.bool,
}
Drawer.defaultProps = {
  classes: null,
  withCheckMark: false,
}

export default Drawer
