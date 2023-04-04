import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import AuthContext from './contexts/AuthContext'
import Login from './views/Login/Login'
import Profile from './views/Profile/Profile'
import Register from './views/Register/Register'
import Home from './views/Home/Home'

function App() {
  return (
    <div className="App">

      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
        </Routes>

    </div>
  )
}

export default App