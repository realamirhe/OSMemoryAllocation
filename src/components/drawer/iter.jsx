import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
// helpers
import { concatenate, branch } from '../utils/helpers'

/* Iter */
const Iter = ({
  classes,
  itemComponent: ItemComponent,
  items,
  selectedIndex,
  withCheckMark,
}) => (
  <Fragment>
    {items &&
      items.map((itemChildren, index) => (
        <ItemComponent
          key={index}
          className={concatenate([
            classes.root,
            branch(
              index === selectedIndex,
              branch(withCheckMark, classes.checked, classes.normal),
            ),
            branch(Math.abs(index - selectedIndex) === 1, classes.neighbor),
            branch(Math.abs(index - selectedIndex) > 1, classes.hide),
          ])}
        >
          {itemChildren}
        </ItemComponent>
      ))}
  </Fragment>
)

Iter.propTypes = {
  classes: PropTypes.shape({}),
  itemComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedIndex: PropTypes.number.isRequired,
  withCheckMark: PropTypes.bool,
}
Iter.defaultProps = {
  classes: {},
  itemComponent: 'p',
  withCheckMark: false,
}

export default Iter
