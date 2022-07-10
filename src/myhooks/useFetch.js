import { useState,useEffect } from "react";

const useFetch=(url)=>{

    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        fetch(url)
        .then(response=>response.json())
        .then(data=>setData(data))
        .catch(error=>{
            console.log(error.message);
        })
    },[url])

    return {data,loading}
}

export default useFetch;
