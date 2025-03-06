
import './App.css'

import LoginPage from '../pages/login'
import HomePage from '../pages/homepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Adminpage from '../pages/adminpage'
import SignInPage from '../pages/singinpage'

function App() {



  return (
    <>

      
      { <BrowserRouter>
        <Routes path="/*">
          <Route path="/" element={<HomePage />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin/*" element={<Adminpage />} />
          <Route path="/signin" element={<SignInPage />} />

          <Route path="/*" element={<HomePage />} />


        </Routes>
      </BrowserRouter> }
    </>
  )
}

export default App
