import axios from 'axios';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../custom hooks/FetchData';

function ProductDetails() {
  const {id} = useParams()
   const navigate = useNavigate();
   const handleback =()=>{
    navigate(-1)
   }
  console.log(id)
  let { data , loading , Error } =useFetch(`https://fakestoreapi.com/products/${id}`);
  if (loading) return<h2>loading ...</h2>
console.log(data)
  return (
    <>
    <button className='btn' onClick={handleback}>Back</button>
    <div className='productCard'>
      <h3>{data.title}</h3>
     <img src={data.image} alt={data.title}/>
     <h4>${data.price}</h4>
     <p>{data.description}</p>
    </div>
   
     
    </>
   
  )
}

export default ProductDetails