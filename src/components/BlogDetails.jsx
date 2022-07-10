import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function BlogDetails() {
    const {id}=useParams();
    const [details,setDetails]=useState(null);

    useEffect(()=>{
        fetch("http://localhost:8000/yazilar/"+id)
            .then(response=>response.json())
            .then(response=>setDetails(response.aciklama))
    })
  return (
    <div>
        {
            details!=null 
                ? <p>{details}</p>
                : <p>boş</p>
        }
    </div>
  )
}
