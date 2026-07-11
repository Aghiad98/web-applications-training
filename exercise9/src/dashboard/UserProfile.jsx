import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./dashboard.css"
function UserProfile() {
    const navigate =useNavigate()
    const handleback =()=>{
        navigate(-1)
    }
  return (
    <div className='UserProfile'>
        <button onClick={handleback} className='btn'>Go Back</button>
       <h3 >welcome to UserProfile</h3> 
        </div>
  )
}

export default UserProfile