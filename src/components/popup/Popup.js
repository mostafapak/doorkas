import React, { useRef, useState } from "react";
import ReactDOM from "react-dom"
import style from "./Popup.module.css"
import {BsFillArrowLeftCircleFill , BsFillArrowRightCircleFill} from "react-icons/bs" 
function Popup (props){
    const [inpvalue,setInpvalue]=useState(props.min);
    const [error,setError]=useState(false)
    const inpref=useRef();
    // function happend when the increase arrow is pressed
    const increasevalue=()=>{
        if(inpvalue<props.max){
            setInpvalue(inpvalue + 1)
        }
    }
    // function happend when the decrease arrow is pressed
    const decreasevalue=()=>{
        if(inpvalue>props.min){
            setInpvalue(inpvalue - 1)
        }
    }
    // function that happend when the ok button pressed
    const okcheck=()=>{
        // this check to prevent user from put number less than min or more than max
        if(inpvalue<props.min || inpvalue>props.max){
            setError(true)
        }else{
            setInpvalue(inpvalue)
            setError(false)
        }
        // blow that comment put your own ok button function
    }
    return ReactDOM.createPortal(
        <div className={style.popup}>
            <div className={style.card}>
                <p className={style.exit} onClick={props.disappear}>X</p>
                <h2>ظبط مفتاح نهايه الشوار يدويا</h2>
                {/* this is the error message that appear if user put number less than min or more than max  you can change it to any message you want*/}
                {error && <p className={style.error}>There is some thing wrong</p>}
                <div className={style.content}>
                    <BsFillArrowLeftCircleFill size={30} className={style.icon} onClick={increasevalue}/>
                    <input ref={inpref} value={inpvalue} onChange={(e)=>setInpvalue(e.target.value)}  min={props.min} max={props.max} type="number"/>
                    <BsFillArrowRightCircleFill size={30} className={style.icon} onClick={decreasevalue}/>
                </div>
                <div className={style.btns}>
                    <button className={style.exitbtn} onClick={props.disappear}>Exit</button>
                    <button className={style.okbtn} onClick={okcheck}>OK</button>
                </div>
            </div>
        </div>

    , document.getElementById('popup'))
}
export default Popup;