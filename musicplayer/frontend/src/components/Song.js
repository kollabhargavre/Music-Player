import React, { useRef } from 'react'
import ReactAudioPlayer from 'react-audio-player';

import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';

import Like from './Like';




const Song = ({song}) => {


  const audioRef = useRef(null)
 
  
  
  


  return (
    <div>
        <Card>
          <ul style={{display:"flex"}}>
            <li><Link to={`/song/${song.id}`}><img src={song.coveralbum} width="35" height="50"/></Link></li>
            <li><ReactAudioPlayer ref = {audioRef} src={`${song.mp3file}`}  controls/></li>
            <li><p>{song.artistName}</p></li>
            <li><Like song={song}/></li>
          </ul>
        </Card>       
    
    </div>
  )
}

export default Song
