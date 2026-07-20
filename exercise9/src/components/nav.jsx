import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider';


function Nav() {
  const { state } = useContext(UserContext);

  return (
    <div className='navbar'>
     <h2>Welcome</h2>
        
        <h2>{state.name}</h2>
        <h2>{state.email}</h2>
    </div>
  )
}
export default Nav