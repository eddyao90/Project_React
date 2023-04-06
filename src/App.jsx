import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import AuthContext from './contexts/AuthContext'
import Login from './views/Login/Login'
import Home from './views/Home/Home'
import Register from './views/Register/Register'
import Start from './views/Start/Start'
import Profile from './views/Profile/Profile'
import Scrapbook from './views/Scrapbook/Scrapbook'
import Maps from './views/Maps/Maps'
import Photos from './views/Photos/Photos'
import Edit from './views/Edit/Edit'


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
          <Route path="profile" element={
          <ProtectedRoute>
          <Profile />
          </ProtectedRoute>
          } />
          <Route path="scrapbook" element={
          <ProtectedRoute>
          <Scrapbook />
          </ProtectedRoute>
          } />
          <Route path="maps" element={
          <ProtectedRoute>
          <Maps />
          </ProtectedRoute>
          } />
          <Route path="photos" element={
          <ProtectedRoute>
          <Photos />
          </ProtectedRoute>
          } />
          <Route path="edit-profile" element={
          <ProtectedRoute>
          <Edit />
          </ProtectedRoute>
          } />
        </Routes>

    </div>
  )
}

export default App