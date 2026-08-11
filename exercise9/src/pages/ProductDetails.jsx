import axios from 'axios';
import React, { useContext, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../custom hooks/FetchData';
import { CurenncyContext } from '../context/CurenncyContext';

function ProductDetails() {
  const {id} = useParams();
  let {price} = useContext(CurenncyContext);
  let { data , loading , Error } =useFetch(`https://fakestoreapi.com/products/${id}`);
  const productprice = useMemo(()=>{
return  price === "USD" ? data.price : data.price*13000
  })
   const navigate = useNavigate();
   const handleback =()=>{
    navigate(-1)
   }
  
  if (loading) return<h2>loading ...</h2>

  return (
    <>
    <button className='btn' onClick={handleback}>Back</button>
    <div className='productCard'>
      <h3>{data.title}</h3>
     <img src={data.image} alt={data.title}/>
     <h4>{price === 'USD' ? `${productprice} $` : `${Math.round(productprice)} Sy`}</h4>
     <p>{data.description}</p>
    </div>
   
     
    </>
   
  )
}

export default ProductDetails