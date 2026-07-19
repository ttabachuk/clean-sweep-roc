import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Route, Routes, HashRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
