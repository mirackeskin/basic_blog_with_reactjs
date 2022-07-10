import React, { Component } from 'react'
import { useState } from 'react'
import Loading from './Loading'
import { useHistory } from 'react-router-dom'


export default function CreatePage() {
  const createPageMainWrapper={
    width: "100%",
    height: "100vh",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  const formWrapper={
    display:"flex",
    flexDirection: 'column',
    justifyContent:"center",
    alignItems: 'center',
  }
  const formLabel={
    fontSize: "20px",
    color: "orange",
    fontFamily: 'sans-serif',
    fontWeight: "bold",
    margin: "5px"
  }
  const formInput={
    width:"100%",
    borderRadius: "5px",
    border: "2px solid orange"
  }

  const [ad,setAd]=useState("");
  const [aciklama,setAciklama]=useState("");
  const [yazar,setYazar]=useState("");

  const [loading,setLoading]=useState(false);
  const history=useHistory();

  const handleSubmit=(e)=>{
    e.preventDefault();
    const product={ad,aciklama,yazar};
    setLoading(true);

    fetch("http://localhost:8000/yazilar",{
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(product)
    }).then(()=>{
      console.log("yazı eklendi.")
      setLoading(false);
      history.push('/');// OTOMATİK YÖNLENDİRME İÇİN KULLANILIYOR.
    })
  }
  return (
    <div style={createPageMainWrapper}>
        {
          loading ?<Loading></Loading>
                  :
                  <form style={formWrapper} onSubmit={handleSubmit}>
                  <label style={formLabel}>Yazı Başlık:</label>
                  <input style={formInput} type="text" required value={ad} onChange={(e)=>setAd(e.target.value)}/>
                  <label style={formLabel}>Yazı Açıklama:</label>
                  <textarea style={formInput} required value={aciklama} onChange={(e)=>setAciklama(e.target.value)}>
        
                  </textarea>
                  <label style={formLabel}>Yazar:</label>
                  <select required style={formInput} value={yazar} onChange={(e)=>setYazar(e.target.value)}>
                    <option value="">Seçiniz</option>
                    <option value="luffy">Luffy</option>
                    <option value="Miraç">Miraç</option>
                    <option value="Zoro">Zoro</option>
                  </select>
                  <button className='btn btn-warning' style={{margin:"10px"}}>Ekle</button>
                </form>
        }
    </div>
  )
}

