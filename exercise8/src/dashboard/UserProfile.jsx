import React from 'react'
import { useNavigate } from 'react-router-dom';
import UserContext from '../UserContext';
import { useContext } from 'react';
import "./dashboard.css"
function UserProfile() {
    const navigate =useNavigate()
    const handleback =()=>{
        navigate(-1)
    }
     const {user} = useContext(UserContext);
  return (
    <div className='UserProfile'>
        <button onClick={handleback} className='btn'>Go Back</button>
       <h3 >welcome to UserProfile {user}</h3> 
        </div>
  )
}

export default UserProfile