import React from 'react'
import { compose, withState, withHandlers } from 'recompose'
// components
import Drawer from './components/drawer'
// style
import './App.css'
import './style/main.scss'

const defaultItems = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6']

const App = compose(
  withState('index', 'setIndex', 0),
  withState('items', 'setItems', defaultItems),
  withHandlers({
    incrementIndex: ({ setIndex, items: { length } }) => () =>
      setIndex(n => Math.min(n + 1, length)),
    decrementIndex: ({ setIndex }) => () => setIndex(n => Math.max(n - 1, 0)),
    reset: ({ setIndex }) => () => setIndex(0),
  }),
)(({ index, items, incrementIndex, decrementIndex }) => (
  <div className="App">
    <header className="App-header">
      <Drawer
        withCheckMark
        items={items}
        selectedIndex={index}
        rightIconHandler={incrementIndex}
        leftIconHandler={decrementIndex}
      />
    </header>
  </div>
))

export default App
