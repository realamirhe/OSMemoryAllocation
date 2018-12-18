// third party packages
import { compose, withState, withHandlers } from 'recompose'

// helpers
const isKey = key => event =>
  (event.which || event.keyCode || event.charCode) === key

// local varaibles
const LEFT = 37
const RIGHT = 39

const handleArrowKey = (
  getFocused,
  leftIconHandler,
  rightIconHandler,
) => event => {
  if (!getFocused) return

  if (isKey(LEFT)(event)) leftIconHandler()
  if (isKey(RIGHT)(event)) rightIconHandler()
}

/* DrawerContainer */
const Container = compose(
  withState('index', 'setIndex', 0),
  withState('focused', 'setFocused', false),
  withHandlers({
    inc: ({ setIndex, items: { length }, index, onChange }) => () => {
      const newIndex = Math.min(index + 1, length - 1)
      setIndex(newIndex)
      onChange(newIndex)
    },
    dec: ({ setIndex, index, onChange }) => () => {
      const newIndex = Math.max(index - 1, 0)
      setIndex(newIndex)
      onChange(newIndex)
    },
    toggle: ({ setFocused }) => () => setFocused(focused => !focused),
  }),
)

export { handleArrowKey, Container }
