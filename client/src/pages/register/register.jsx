import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";

let initialState={
   fname:"",
   lname:"",
   email:"",
   profileImage:"",
   phone:"",
   password:"",
   address:"",
   "address.shipping":"",
  " address.billing":""
}

function Register(){

    const [user, setUser]= useState(initialState)
    const handleChange=(e)=>{
        const name = e.target.name
        const value= e.target.value
        setUser({
            ...user,
            [name]:value
        })
    }

 
    const register = async(e)=>{
        try{         
            e.preventDefault()
            let response= await axios.post("http://localhost:3002/register",user)
            alert("response")
            console.log(response.status);
          
            navigator("/login")

        }
        catch(err){
            alert("Invalid credential")
            console.log(err);
        }
    }
    const navigator = useNavigate()
    const login =()=>{
        navigator("/login")
    }



return(
    
       <div>
       <h1>hello</h1>
       <h1>Register</h1>
         <input type="text" name="fname" value={user.fname} placeholder="YOUR FIRSTNAME" onChange={handleChange}/>    <br></br>     
           <input type="text" name="lname" value={user.lname} placeholder="YOUR LASTNAME" onChange={handleChange}/><br></br>  
           <input type="email" name="email" value={user.email} placeholder="YOUR EMAIL" onChange={handleChange}/><br></br>  
           <input type="file" name="profileImage" value={user.profileImage} placeholder="YOUR profileImage" onChange={handleChange}/><br></br>  
           <input type="phone" name="phone" value={user.phone} placeholder="YOUR Phone" onChange={handleChange}/><br></br>  
           <input type="password" name="password" value={user.password} placeholder="YOUR PASSWORD" onChange={handleChange}/><br></br>  
           <input type="address" name="email" value={user.address} placeholder="YOUR Address" onChange={handleChange}/><br></br>  
           <input type="street" name="street" value={user.street} placeholder="YOUR street" onChange={handleChange}/><br></br>  
           <input type="city" name="city" value={user.city} placeholder="YOUR city" onChange={handleChange}/><br></br>  
           <input type="pincode" name="pincode" value={user.pincode} placeholder="YOUR pincode" onChange={handleChange}/><br></br>  
           <button type="Submit" onClick={register}>Register</button>
           or
           <button type="Submit" onClick={login}>Login</button>
       </div>
   
)
}
export default Register
