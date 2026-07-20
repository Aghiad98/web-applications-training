import React, { useState } from 'react'
import './sign.css'
import { useNavigate } from 'react-router-dom';
import UserContext from './UserContext';
import { useContext } from 'react';
function Signup() {
  const {setUser} = useContext(UserContext);
  let [name,setName]=useState('');
  let [email,setEmail]=useState('');
  let [password,setPassword] = useState("")
  const navigate =useNavigate()
  function handleSignup(e){
     e.preventDefault()

    if( !name.trim() || !email.trim() || !password.trim() ){
      return alert ('please enter your data')
    }
const user={
  name,
  email,
  password
}
 setUser(name);
  localStorage.setItem("user",JSON.stringify(user))
    setName('')
    setEmail('')
    setPassword('')
    navigate("/dashboard/home");
   
    
  }


  return (
   
    <div className='signup'>
      <form onSubmit={handleSignup}>
      <h1>Signup</h1>
      <p>Username : </p>
      <input type="text"  value={name} onChange={(e)=>setName(e.target.value)}/>
      <p>Email : </p>
      <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
      <p>Password : </p>
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  />
      <button type='submit' className='btn'>Signup</button>
      </form>
        
      </div>
  )
}

export default Signup