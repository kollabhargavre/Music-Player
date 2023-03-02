import React, { useContext, useEffect } from 'react'
import AuthContext from '../contexts/AuthContext'
import Song from './Song'

const LikedSongs = () => {
    const {likedSongs} = useContext(AuthContext)
    console.log("likedsongs",likedSongs)

  return (
    <div>
        {likedSongs && <ul>
            {likedSongs.map((song)=>(
                <li key={song.id}><Song song={song}/></li>
            ))}
        </ul>}
    </div>
  )
}

export default LikedSongs
