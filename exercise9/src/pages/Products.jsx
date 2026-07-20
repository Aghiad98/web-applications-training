import React, {  useContext, useMemo, useState } from 'react'
import useFetch from '../custom hooks/FetchData'
import { useNavigate } from 'react-router-dom';
import { CurenncyContext } from '../context/CurenncyContext';

function Products() {
  const navigate = useNavigate();
  let { data , loading , Error } =useFetch('https://fakestoreapi.com/products');
 const [category , setcategory] = useState("men's clothing")


    let {price} = useContext(CurenncyContext)
   
    
   const filterData = 
   category === "all"
   ? data :data.filter(product=> product.category==category);
   const displayedProducts = useMemo(()=>{
    return filterData.map(product=>{
        return {
      ...product ,
      displayPrice: price ==="USD" ? product.price : product.price*13000
        };
    })
   
    },[filterData,price])
  
  if (loading) return<h2>loading ...</h2>
  if (Error) return<h2>{Error}</h2>
  return (
    <> 
       <h2>Products</h2>
       <div>
        <button onClick={()=> setcategory("men's clothing") } className={category === "men's clothing" ? "active" : "btn"}>Men's Clothes</button>
        <button onClick={()=> setcategory("women's clothing")}  className={category === "women's clothing" ? "active" : "btn"}>Women's Clothes</button>
        <button onClick={()=> setcategory("all")}  className={category === "all" ? "active" : "btn"}>All</button>
       </div>
       <div className='Products'>
        
        {displayedProducts.map(product=>
        
          <div  key={product.id} className='productCard'>
          <div className='img'>
          <img src= { product.image} alt={product.title} />
          </div>
          <div className='title'>
            <h3>{product.title}</h3>
            
          </div>
            <div className='price'>

            <p> {price==="USD" ? `${product.displayPrice}$` : `${Math.round(product.displayPrice)} Sy` } </p>
          </div>
          <div>
          
              <button className='btn' onClick={()=>navigate(`/productDetails/${product.id}`)} >see more</button>
           
            
          </div>
          </div>
       
        )}
      </div>
    </>
 
    
  )
}


export default Products