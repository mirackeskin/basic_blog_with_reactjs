import React, { Component } from 'react'
import { Link ,useHistory} from 'react-router-dom';

export default function Blog(props) {
  const {name,content,writer,id}=props;
  const history=useHistory();

    const blogMainWrapper={
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin:"20px",
        padding: "10px",
        background: "aliceblue",
        borderRadius: "10px",
        border: "1px solid aliceblue",
        boxShadow: "5px 0px 15px 0px black",
        
    }
  const handleDelete=()=>{
    fetch("http://localhost:8000/yazilar/"+id,{
      method:'DELETE'
    }).then(()=>{
      history.push('/');
    })
  }
  return (
    <div style={blogMainWrapper}>
        <Link style={{textDecoration:"none" ,color: "black"}} to={`/blogs/${id}`}>
          <h2>{name}</h2>
          <p>{content}</p>
        </Link>        
        <button onClick={handleDelete} className='btn btn-danger'>Sil</button>
      </div>
  )
}



