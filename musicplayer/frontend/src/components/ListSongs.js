import React from 'react'
import Song from './Song'

const ListSongs = ({songs}) => {
    

  return (
    <div>
      {!songs && <p>No songs</p>}
      {songs &&
      <>
      <ul>
      {songs.map((song)=>(
        <li key={song.id}><Song song={song}/></li>
      ))}
      </ul>
      </>}
    </div>
  )
}

export default ListSongs
