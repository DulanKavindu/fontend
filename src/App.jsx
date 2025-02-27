
import './App.css'

import LoginPage from '../pages/login'
import HomePage from '../pages/homepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  


  return (
    <>
    
   
  <BrowserRouter>
  <Routes path="/*">
  <Route path="/" element={<HomePage />} />

  <Route path="/login" element={<LoginPage />} />


<Route path="/*" element={<h1>404error</h1>} />


  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
