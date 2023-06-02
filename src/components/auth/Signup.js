import React, { useRef, useState } from "react";
import style from "./Auth.module.css"
import logo from "../../assets/logo.png"
import { useNavigate } from "react-router-dom";
const Signup=()=>{
    const passwordref=useRef();
    const navigate = useNavigate();
    const [password,setPassword]=useState("");
    // function that happend when signup button is pressed
    const signupfunc =(e)=>{
        e.preventDefault();
        console.log(password)
        // set the password to localstorage
        localStorage.setItem("password", password);
        navigate("/")
    }
    return(
        <>
            <div className={style.container}>
                <div className={style.card}>
                    <h2>Sign up doorKas <br/> programming terminal</h2>
                    <form onSubmit={signupfunc}>
                        <label>Password</label>
                        <input ref={passwordref} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="Type your password" required/>
                        <button type="submit">SIGN UP</button>
                    </form>
                </div>
            </div>
            <div className={style.logo}>
                <img src={logo} alt="logo"/>
            </div>
        </>
    )
}
export default Signup;