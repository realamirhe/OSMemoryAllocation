// third party packages
import { compose, withState, withHandlers } from 'recompose'

// helper
const sizeComputer = (event, compare, boundSize, size, direction) => {
  if (event.shiftKey) return compare(boundSize, size + direction * 100)
  else if (event.ctrlKey) return compare(boundSize, size + direction * 10)
  return compare(boundSize, size + direction * 1)
}

/* AllocatorContainer */
const AllocatorContainer = compose(
  withState('size', 'allocate', 0),
  withHandlers({
    increment: ({ allocate, maxSize, size, onChange }) => event => {
      const newSize = sizeComputer(event, Math.min, maxSize, size, 1)
      allocate(newSize)
      onChange(newSize)
    },
    decrement: ({ allocate, minSize, size, onChange }) => event => {
      const newSize = sizeComputer(event, Math.max, minSize, size, -1)
      allocate(newSize)
      onChange(newSize)
    },
  }),
)

export default AllocatorContainer
