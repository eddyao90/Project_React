import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import AuthContext from './contexts/AuthContext'
import Login from './views/Login/Login'
import Home from './views/Home/Home'
import Register from './views/Register/Register'
import Start from './views/Start/Start'


function App() {
  return (
    <div className="App">

      <Routes>
          <Route path='/' element={<Start />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="home" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
        </Routes>

    </div>
  )
}

export default App