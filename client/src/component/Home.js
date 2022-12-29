import React, { useState, Fragment } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


// const Login = () => {
//     const [data, setData] = useState({ email: "", contact: "" });
//     const handleChange = function (event) {
//         let fieldValue = event.target.value
//         let fieldName = event.target.name
//         console.log(fieldName, fieldValue);
//         setData({
//             ...data,
//             [fieldName]: fieldValue
//         })
//     }
//     const navigate = useNavigate()


//     const handle = async (event) => {
//         try {
//                 event.preventDefault()
//                 // let res = await axios.post("http://localhost:3001/login", {
//                 //     email: data.email,
//                 //     contact: data.contact,
//                 // })
//                 // localStorage.setItem("email", data.email);
//                 alert("login successful redirect into welcome page")
//                 navigate("/welcome")
//             }
//         catch (err) {
//             alert("invalid email and contact")         
//         }
//     }
//     return (
//         <div style={{
//             backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20201026/pngtree-futuristic-shape-abstract-background-chemistry-technology-concept-for-website-image_438818.jpg')" ,
//             height:'100vh',
//             marginTop:'-70px',
//             fontSize:'50px',
//             backgroundSize: 'cover',
//             backgroundRepeat: 'no-repeat',
//         }}>

//             <h1>Login</h1>
//             <input type="text" name="email" required value={data.email} placeholder="Enter Email" onChange={handleChange} ></input><br></br>
//             <input type="contact" name="contact" value={data.contact} placeholder="Enter contact" onChange={handleChange} required></input><br></br>
//             <input className="button" onClick={handle} type="submit" />

//         </div>
//     )
// }
// export default Login



function Login() {
    const [login, setlogin] = useState(false);
    const [user, setUser] = useState({username:"", email:"", password:""})
    const [data, setData] = useState({ email: "", contact: "" });
    const handleChange = function (event) {
        let fieldValue = event.target.value
        let fieldName = event.target.name
        console.log(fieldName, fieldValue);
        setData({
            ...data,
            [fieldName]: fieldValue
        })
    }
    const navigate = useNavigate()


    const handle = async (event) => {
        try {
            event.preventDefault()
            let res = await axios.post("http://localhost:3001/login", {
                email: data.email,
                contact: data.contact,
            })
            localStorage.setItem("email", data.email);
            alert("login successful redirect into welcome page")
            navigate("/welcome")
        }
        catch (err) {
            alert("invalid email and contact")
        }
    }

    const handleR =(e)=>{
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

    return (
        <Fragment>
            <div style={{
                backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20201026/pngtree-futuristic-shape-abstract-background-chemistry-technology-concept-for-website-image_438818.jpg')",
                height: '100vh',
                marginTop: '-70px',
                fontSize: '50px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}>
                <div className="welcomdiv">
                    <h1 id="weltxt">Welcome to Shopping card</h1>
                    <h3 id="strtxt">Let's Start By Making a Account</h3>
                </div>
                {login ?
                    <form className="form-signin">
                        <input type="email" name="email" required value={data.email} placeholder="Enter Email" onChange={handleChange} />
                        <input type="password" name="contact" value={data.contact} placeholder="Enter contact" onChange={handleChange} required />
                        <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={handle}>Sign in</button>
                    </form>
                    :
                    <form className="form-signup">
                        <input type="text" name="username"  className="form-control" placeholder="Username"  onChange={handleR} required />
                        <input type="email" name="email" className="form-control" placeholder="Email address"   onChange={handleR} required />
                        <input type="password" name="password" className="form-control" placeholder="Password" onChange={handleR}  required />
                        <input type="password" name="password2" className="form-control" placeholder="Confirm Password"  onChange={handleR} required />
                        <button className="btn btn-lg btn-primary btn-block" type="button" onClick={register} >Sign Up</button>
                        <p id="logintxt">Already have an Account , Want to <button href="" onClick={() => setlogin(true)}>Login</button></p>
                    </form>}
            </div>
        </Fragment>
    )
}
export default Login;