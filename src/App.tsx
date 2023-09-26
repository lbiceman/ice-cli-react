import React, { lazy, Suspense, useState } from 'react'
import Class from './components/Class'
import './app.less'

// prefetch
const PreFetchDemo = lazy(() => import(
  '@/components/PreFetchDemo'
))
// preload
const PreloadDemo = lazy(() => import(
  '@/components/PreloadDemo'
 ))

function App() {
  const [ show, setShow ] = useState(false)

  const onClickSSSSSSS = () => {
    setShow(true)
  }
  return (
    <>
      <h2 onClick={onClickSSSSSSS}>展示</h2>
      <Class />
      {/* show为true时加载组件 */}
      { show && (
        <>
          <div className='smallImg'></div> {/* 小图片背景容器 */}
          <div className='bigImg'></div> {/* 大图片背景容器 */}
          <Suspense fallback={null}><PreloadDemo /></Suspense>
          <Suspense fallback={null}><PreFetchDemo /></Suspense>
        </>
      ) }
    </>
  )
}
export default App