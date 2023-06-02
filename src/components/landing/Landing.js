import React, { useEffect, useRef } from "react";
import style from "./Landing.module.css"
import video from "../../assets/backvideo.mp4"
const Landing=()=>{
    const videos=useRef();
    //make video play once the page is open 
    useEffect(()=>{
        const playvideo=()=>{
            videos.current.play();
        }
        playvideo();
    })
    return(
        <>
            <div className={style.container}>
                <div className={style.video}>
                    {/* muted : mute the video loop: make video play forever */}
                    <video ref={videos} muted loop src={video}></video>         
                </div>
                <div className={style.content}>
                    <h2>doorKas programming terminal</h2>
                </div>
            </div>
        </>
    )
}
export default Landing