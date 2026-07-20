import React, { createContext, useContext, useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom'


import { UserContext } from '../context/UserProvider'

function UserProfile() {
   
  const navigate = useNavigate()
  const handleback= ()=>{
    navigate(-1)
  }
   const { state, dispatch } = useContext(UserContext);
const [name, setName] = useState(state.name);
const [email, setEmail] = useState(state.email);
  const handleSubmit = (e) => {

    e.preventDefault();

    dispatch({
        type: "SET_USER",
        payload: {
            name,
            email
        }
    });

}
  return (
  
    <>
    <div className='header-Settings'>
      <h2>Settings</h2>
      <button className='btn' onClick={handleback} >Back</button>
      </div>
      <div className='main-settings'>
         <h3>UserProfile</h3>
         <form onSubmit={handleSubmit}>
          <h5>Username</h5>
         <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
         <h5>Eamil</h5>
       
         <input  type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
         <button type='submit' className='btn'>update</button>
         </form>
      </div>
        

      </>
  )

}

export default UserProfile