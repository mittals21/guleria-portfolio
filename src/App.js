import React from 'react'
import Designer from './components/designer/Designer'
import Developer from './components/developer/Developer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <div>
      {/* <Designer/> */}
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Developer/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
