import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/authContext'

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar-chat'>
      <div className="user">
        <div className="userProfile">
        <img src={currentUser.photoURL} alt="" />
            <span>{currentUser.displayName}</span>
        </div>
        <div className='Btn-out'>
        <button onClick={()=>signOut(auth)}>logout</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar