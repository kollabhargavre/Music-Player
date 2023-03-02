import React, { useContext } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AuthContext, { AuthProvider } from './contexts/AuthContext'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import PrivateRoute from './utils/PrivateRoute'
import AddSong from './components/AddSong'
import ExpandSong from './components/ExpandSong'
import Sidebar from './components/Sidebar'
import LikedSongs from './components/LikedSongs'

const App = () => {
  const {user} = useContext(AuthContext)


  return (
    <div className='App'>
      
      {user && <Sidebar/> }
        <Routes>
          <Route path="" element={<PrivateRoute><Home/></PrivateRoute>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/addSong" element={<PrivateRoute><AddSong/></PrivateRoute>}/>
          <Route path="/song/:id" element={<PrivateRoute><ExpandSong></ExpandSong></PrivateRoute>}/>
          <Route path="/liked/" element={<PrivateRoute><LikedSongs/></PrivateRoute>}/>
        </Routes> 
      
    </div>
  )
}

export default App
