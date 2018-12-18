import React from 'react'
// third party packages
import { compose, withState, withHandlers } from 'recompose'
// components
import Drawer from './components/drawer'
import Allocator from './components/allocator'
// style
import './App.css'
import './style/main.scss'

const allocationStrategies = [
  'First Fit',
  'Second Fit',
  'Next Fit',
  'Best Fit',
  'Worst Fit',
]
// const memoryType = ['free', 'inUse', 'Os']


/* App */
const App = compose(
  withState('typeIndex', 'allocate', 0),
  withHandlers({
    changeSize: ({ allocate }) => item => allocate(item),
  }),
)(({ changeSize }) => (
  <div className="App no-user-select">
    <header className="App-header">
      <Drawer
        withCheckMark
        items={allocationStrategies}
        itemComponent="p"
        onChange={console.log}
      />
      <Allocator maxSize={200} minSize={0} onChange={console.log} />
    </header>
  </div>
))

export default App
