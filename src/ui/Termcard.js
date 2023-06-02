import React from "react";
import style from "./Termcard.module.css"
import {AiFillCaretLeft} from "react-icons/ai"
const Termcard =(props)=>{
    return(
        <div className={style.card} onClick={props.onclick}>
            <div className={style.icon}>
                <AiFillCaretLeft size={30} color="red"/>
            </div>
            <div className={style.text}>
                <div className={style.num}>
                    <p>{props.id}</p>
                </div>
                <div className={style.content}>
                    <p>{props.arabic}</p>
                    <p>{props.english}</p>
                </div>
            </div>
        </div>
    )
}
export default Termcard