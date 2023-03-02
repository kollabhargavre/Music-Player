import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api/Post'
import AuthContext from '../contexts/AuthContext'

const AddSong = () => {

    const navigate = useNavigate()
    const [name,setName] = useState('')
    const [description,setDescription] = useState('')
    const [artist,setArtist] = useState('')
    const [cover,setCover] = useState(null)
    const [song,setSong] = useState(null)
    const {authTokens,songs, setSongs} = useContext(AuthContext)


  



    const handleSubmit = async(e)=>{
        e.preventDefault()

        let uploadData = new FormData();
        uploadData.append("name",name)
        uploadData.append("description",description)
        uploadData.append("artist",artist)
        uploadData.append("cover",cover,cover.name)
        uploadData.append("song", song, song.name)

        let response = await api.post("/songs/",uploadData,{
          "headers":
                {
                  "Content-type":"application/json",
                  "Authorization":"Bearer "+String(authTokens?.access)
                }
        })
        .catch((err)=>console.log(err))
        if(response && response.status===200){
          let New_songs = [...songs,response.data]
          setSongs(New_songs)
          navigate("/")
        }else{
          alert("upload failed")
        }

      }

    



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)} required/>
        <br/>
        <label htmlFor="decription">Description</label>
        <textarea type="text" id="decription" value={description} onChange={(e)=>setDescription(e.target.value)}/>
        <br/>
        <label htmlFor="artist">Artist Name</label>
        <input type="text" id="artist" value={artist} onChange={(e)=>setArtist(e.target.value)} required/><br/>
        <label htmlFor="cover">Cover Album</label>
        <input type="file" id="cover" name="coverimage" onChange={(e)=>setCover(e.target.files[0])} required/><br/>
        <label htmlFor="song">Song</label>
        <input type="file" id="song" name="mp3file" onChange={(e)=>setSong(e.target.files[0])} required/><br/>
        <button type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default AddSong
