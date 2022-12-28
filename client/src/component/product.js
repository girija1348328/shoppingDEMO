import React, { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

const Homepage = ({ }) => {
  
    const navigate = useNavigate()

 
    const handleLogout = () => {
        console.log("Logout Clicked");
        navigate('/')
      
    }
 
    return (
        <div style={{
            backgroundImage: "url('https://media.istockphoto.com/id/1353613598/photo/abstract-layered-background-with-wavy-curvy-shapes-blue-bended-multi-layers-effect-isolated.jpg?b=1&s=170667a&w=0&k=20&c=ADmFCIKmR5PjHJXSR1M-CDRUutJY8QZIrlpUHolDock=')" ,
            height:'100vh',
            marginTop:'-70px',
            fontSize:'50px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}>
      
            <div className="homepage">
             <h1>welcome</h1>
              <button>
              <div className="button" onClick={handleLogout} >Logout</div>

              </button>  
                </div>
  

    </div>
    )
}
export default Homepage

