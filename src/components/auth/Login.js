import React, {  useState } from "react";
import style from "./Auth.module.css"
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineTwitter,AiFillGoogleCircle} from "react-icons/ai"
import logo from "../../assets/logo.png"
import door from "../../assets/door.jpg"
import {Link, useNavigate} from 'react-router-dom'
const Login = ()=>{
    const navigate=useNavigate();
    const [passwordinp,setPasswordinp]=useState()
    const password = localStorage.getItem("password")
    const loginuser=(e)=>{
        e.preventDefault();
        // check if the password that user entered is true or not and move the user to home page
        if(passwordinp===password){
            navigate('/home')
        }
    }
    return(
        <>
            <div className={style.container}>
                <div className={style.card}>
                    <div className={style.door}>
                        <img src={door} alt="logo"/>
                    </div>
                    <h2>Login doorKas programming terminal</h2>
                    <form onSubmit={loginuser}>
                        <label>Username</label>
                        <input type="text" placeholder="Type your username" required/>
                        <label>Password</label>
                        <input value={passwordinp} onChange={(e)=>setPasswordinp(e.target.value)} type="text" placeholder="Type your password" required/>
                        <div className={style.language}>
                            <input type="radio" id="Arabic" name="language" value="Arabic"/>
                            <label for="Arabic">Arabic</label><br/>
                            <input type="radio" id="English" name="language" value="English"/>
                            <label for="English">English</label><br/>
                        </div>
                        <Link to="#" className={style.forgetpassword}>Forget password?</Link>
                        <button type="submit">LOGIN</button>
                    </form>
                    <p>Or sign up using</p>
                    <div className={style.loginwith}>
                        <button><BsFacebook size={60} color="#4267B2"/></button>
                        <button><AiOutlineTwitter size={60} color="#1DA1F2"/></button>
                        <button><AiFillGoogleCircle size={60} color="#DB4437"/></button>
                    </div>
                    <p>Or sign up using</p>
                    <Link to='/signup'>SIGN UP</Link>
                </div>
            </div>
            <div className={style.logo}>
                <img src={logo} alt="logo"/>
            </div>
        </>
    )
}
export default Login;