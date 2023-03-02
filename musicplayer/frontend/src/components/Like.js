import React, { useContext, useState } from 'react'
import { AiFillHeart } from "react-icons/ai";
import AuthContext from '../contexts/AuthContext';
import api from '../api/Post'
import LikedSongs from './LikedSongs';

const Like = ({song}) => {

    const {user,authTokens,LikedSongs,setLikedSongs} = useContext(AuthContext)
    const [state,setState]  = useState(song.likes.filter((like)=>like.id===user.user_id).length?true:false)
    
    

    const handleLike = async(state,id)=>{
      if(!state){
        let response = await api.post(`likes/song/${id}`,{"email":"ok"},{
          "headers":{
            "Content-type":"application/json",
            "Authorization":"Bearer "+String(authTokens?.access)
          }
        })
        .catch((err)=>console.log(err))
        if(response && response.status === 200){
          setState(true)
          console.log(response.data)
          let new_liked = [...LikedSongs,response.data]
          
        }
      }else{
        let response = await api.delete(`likes/song/${id}`,{
          "headers":{
            "Content-type":"application/json",
            "Authorization":"Bearer "+String(authTokens?.access)
          }
        })
        .catch((err)=>console.log(err))
        if(response && response.status === 200){
          setState(false)
      }
      
    }
  }

    
    
  return (
    <div>
      <AiFillHeart  style={{width:"35",height:"35",color:state?"red":"black"}} onClick={(e)=>handleLike(state,song.id)} />
    </div>
  )
}

export default Like
