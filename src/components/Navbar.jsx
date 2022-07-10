import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
  
  render() {
    const navbarWrapper={
        background: "orange",
        width: "100%",
        height: "50px",
        margin: "0px",
        padding: "0px"
    }
    const navbarElementsWrapper={
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height:"100%"
    }
    const navbarIcon={
        
    }
    const navbarButtonsWrapper={
        height:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }
    return (
      <div style={navbarWrapper}>
        <div className='container' style={navbarElementsWrapper}>
            <div style={navbarIcon}>
                <h3 style={{color:"aliceblue"}}>AOS BLOG</h3>
            </div>
            <div style={navbarButtonsWrapper}>
                <Link className='btn btn-warning-outline' to="/" >AnaSayfa</Link>
                <Link className='btn btn-warning-outline' to="/create">Yeni Yazı</Link>
            </div>
        </div>
      </div>
    )
  }
}
