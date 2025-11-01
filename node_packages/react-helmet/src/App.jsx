import React from 'react'
import Head from './Head'
import { Route, Routes, useNavigate } from 'react-router'
const App = () => {
  const navigate = useNavigate();
  const handleAbout = () => {
    navigate('/about')
  }
  return (
    <Routes>
      <Route path='/' element={<>
        <Head title={'Home'} />
        <h1>Home</h1>
        <button onClick={handleAbout}>About</button>
      </>
      } />
      <Route path='/about' element={
        <>
          <Head title={'about'} />
          <div>
            <h1>About</h1>
          </div>
        </>
      } />
    </Routes >
  )
}

export default App