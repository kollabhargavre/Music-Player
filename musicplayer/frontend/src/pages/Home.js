import React, { useContext, useState } from 'react'

import ListSongs from '../components/ListSongs'
import Player from '../components/Player'
import Sidebar from '../components/Sidebar'
import AuthContext from '../contexts/AuthContext'


const Home = () => {

  const {logoutUser, user, songs} = useContext(AuthContext)






  return (
    <div>
      
      <div className='container'>
        <ListSongs songs={songs} />
      </div>
      {/* <Player songs={songs} currentSongNo={currentSongNo} setCurrentSongNo={setCurrentSongNo} nextSongIndex={nextSongIndex}/> */}
    </div>
  )
}

export default Home
