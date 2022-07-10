import React, { useEffect, useState } from 'react'
import Blogs from './Blogs'
import Loading from './Loading';

export default function Home() {
    const [blogs,setBlogs]=useState(null);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        waitFunction();
        fetch("http://localhost:8000/yazilar")
        .then(response=>response.json())
        .then(response=>setBlogs(response))
        .catch(error=>{
            console.log(error.message);
        })
    },[blogs])//burada [] vardı.
    const waitFunction=()=>{
        setTimeout(()=>{
            setLoading(false);
        },2000)
    }
  return (
    <div>
        {
            loading ? <Loading></Loading>
                    : <Blogs blogs={blogs}></Blogs>
        }
        
    </div>
  )
}
