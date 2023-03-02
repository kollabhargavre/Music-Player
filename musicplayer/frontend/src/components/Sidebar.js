import React, { useContext } from 'react'
import { BiHomeCircle } from "react-icons/bi";
import { GiFern } from "react-icons/gi";
import { VscLibrary} from "react-icons/vsc";
import { AiFillHeart } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { Link } from 'react-router-dom';

import AuthContext from '../contexts/AuthContext';

 
const Sidebar = () => {
    const {user,logoutUser} = useContext(AuthContext)
  return (
    <div className='sidebar'>
        <GiFern style={{color:"blue",width:"80px",height:"80px"}}/>
        <p>Hello, {user.username}</p>
        <ul className='list'>
            <li><Link to="/"><BiHomeCircle style={{color:"blue",width:"30px",height:"30px"}}/>Home</Link></li>
            <li><Link><VscLibrary style={{color:"blue",width:"30px",height:"30px"}}></VscLibrary>Library</Link></li>
            <li><Link to="/addSong/">Add Song</Link></li>
            <li><Link to="/liked/"><AiFillHeart style={{color:"red"}}></AiFillHeart>Liked songs</Link></li>
            <li onClick={logoutUser}><BiLogOut></BiLogOut>Logout</li>
        </ul>
                
    </div>
  )
}

export default Sidebar
