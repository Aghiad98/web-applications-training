import axios from 'axios';
import React, { useEffect, useState } from 'react';

function useFetch(urlData) {
    const [data , setData] = useState([]);
    const [loading , setLoading] = useState(true);
    let [Error , setError] = useState(null);

    useEffect(()=>{
        let fetchdata = async()=>{
            setLoading(true)
            
            try{
                let response = await axios.get(urlData)
             
               
                setData(response.data)
                 
            }catch(error){
                setError(error.message)
             } finally{

                setLoading(false);

            }
        }
        fetchdata()
    },[urlData])
  return (
    { data , loading , Error }
  )
}

export default useFetch