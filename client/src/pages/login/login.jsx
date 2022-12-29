import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"



const Login = () => {
const [data, setDate] = useState({email:"", password:""})

const handleChange =(e)=>{
    let name = e.target.name
    let value = e.target.value

    setDate({
        ...data,
        [name]:value
    })
}

const navigator  = useNavigate()
const handle =async(e)=>{
    try{
        e.preventDefault()
        let response= await axios.post("http://localhost:3002/login",{
            email:data.email,
            password:data.password
        })
        alert("response")
        console.log(response.data);
        navigator("/homepage")

    }
    catch(err){
        alert("invalid creadentials")
    }
}

    return (
        <div className="login">

            <h1>Login</h1>
            <input type="text" name="email" required value={data.email} placeholder="Enter Email" onChange={handleChange} ></input>
            <input type="password" name="password" value={data.password} placeholder="Enter password" onChange={handleChange} required></input>
            <input className="button" onClick={handle} type="submit" />
        </div>
    )

}
export default Login
