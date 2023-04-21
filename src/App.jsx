import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Login from './views/Login/Login'
import Home from './views/Home/Home'
import Register from './views/Register/Register'
import Start from './views/Start/Start'
import Profile from './views/Profile/Profile'
import Scrapbook from './views/Scrapbook/Scrapbook'
import FollowList from './views/FollowList/FollowList'
import Maps from './views/Maps/Maps'
import Photos from './views/Photos/Photos'
import Edit from './views/Edit/Edit'
import ErrorPage from './views/ErrorPage/ErrorPage'
import People from './views/People/People';


const App = () => {
  return (
    <div className="App">
      <Navbar />

      <Routes>
          <Route path='/' element={<Start />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          
          <Route path="home" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="profile/:id" element={
            <ProtectedRoute>
             <Profile />
            </ProtectedRoute>
          } />
          <Route path="people" element={
          <ProtectedRoute>
          <People/>
          </ProtectedRoute>
          } />
          <Route path="scrapbook/:id" element={
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
          <Route path="all-follows" element={
          <ProtectedRoute>
          <FollowList />
          </ProtectedRoute>
          } />
          <Route path="edit-profile" element={
          <ProtectedRoute>
          <Edit />
          </ProtectedRoute>
          } />
          <Route path="*" element={<ErrorPage />} />
        </Routes>

    </div>
  )
}

export default App