import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CurenncyContext } from '../context/CurenncyContext'

function CurrencySettings() {
   const navigate = useNavigate()
  const handleback= ()=>{
    navigate(-1)
  }
  let {price,togglePrice} = useContext(CurenncyContext)
  const [selectedPrice , setselectedPrice] = useState(price)
  const handlePrice =(e)=>{
    e.preventDefault();
    return togglePrice(selectedPrice)
  }
  return (
    <>
    <div className="headerSettings">
      <h2>Settings</h2>
      <button className='btn' onClick={handleback}>Back</button>
      </div>
      <div className='main-settings'>
         <h3>Products Settings</h3>
         <form onSubmit={handlePrice}>
          <h5>Price</h5>

          <select name="" id=""   value={selectedPrice} onChange={(e)=>setselectedPrice(e.target.value)}>
            <option className='option' value='Sy' >Sy</option>
            <option className='option'  value='USD'  >USD</option>
          </select>
         <button type='submit' className='btn'>update</button>
         </form>
      </div>
      </>
  )
}

export default CurrencySettings