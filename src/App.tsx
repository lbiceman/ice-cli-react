import React, { lazy, Suspense, useState } from 'react'
import Class from './components/Class'
import './app.less'

function App() {
  const [ show, setShow ] = useState(false)

  const showComponent = () => {
    setShow(true)
  }
  return (
    <>
      <h2 onClick={showComponent}>展示</h2>
      <Class />
    </>
  )
}
export default App