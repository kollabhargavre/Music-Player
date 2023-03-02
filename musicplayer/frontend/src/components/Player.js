import React, { useRef } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { Link } from 'react-router-dom'


const Player = ({songs, currentSongNo,setCurrentSongNo,nextSongIndex}) => {
    const song = songs[currentSongNo]
    const audiofile = useRef()
  return (
    <div>
        {song &&<div className='player'>
            Player
        <ul>
        <li><Link to={`/song/${song.id}`}><img src={song.coveralbum} width="35" height="50"/></Link></li>
        <span>             </span>
        <ReactAudioPlayer ref = {audiofile} src={`${song.mp3file}`}  controls />
        </ul>
        </div>}
    </div>
  )
}

export default Player
