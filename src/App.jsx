import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';


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
import ErrorPage from './views/ErrorPage/ErrorPage'


const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

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
          <Scrapbook setCurrentId={setCurrentId}/>
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
          <Route path="*" element={<ErrorPage />} />
        </Routes>

    </div>
  )
}

export default App