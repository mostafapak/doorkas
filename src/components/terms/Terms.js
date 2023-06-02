import React, { useState } from "react";
import style from "./Terms.module.css"
import Termcard from "../../ui/Termcard";
import Popup from "../popup/Popup";
// this is your own data you can modify,add and delete  it from here
const terms = [
    {id: "p1",arabic:"متروكه للمصنع",english : "Reserved", min:0 , max:0},
    {id: "p2",arabic:"سرعه الفتح",english : "Opening speed", min:5 , max:80},
    {id: "p3",arabic:"نقطه التباطئ اثناء الفتح",english : "Open point", min:5 , max:100},
    {id: "p4",arabic:"السرعه عند النهايه",english : "Spd end point", min:5 , max:50},
    {id: "p5",arabic:"زمن التسارع عند بدايه الفتح",english : "acc time open", min:1 , max:10},
    {id: "p6",arabic:"زمن التباطئ عند نهايه الفتح",english : "dec time open", min:1 , max:10},
    {id: "p7",arabic:"مقدار القوه الموضوعه علي الباب في حاله الفتح التام",english : "Open force", min:1 , max:15},
    {id: "p8",arabic:"السرعه عند بدايه الغلق",english : "spd start close", min:5 , max:75},
    {id: "p9",arabic:"سرعه الغلق",english : "closing speed", min:5 , max:70},
    {id: "p10",arabic:"نقطه التباطئ اثناء الغلق ",english : "close point", min:5 , max:100},//max??
    {id: "p11",arabic:"السرعه عند نهايه الغلق",english : "spd end close", min:5 , max:50},
    {id: "p12",arabic:"زمن التسارع عند بدايه الغلف",english : "acc time close", min:1,max:10},
    {id: "p13",arabic:"زمن التباطئ عند نهايه الغلف",english : "dec time close", min:1,max:10},
    {id: "p14",arabic:"مقار القوه الموضوعه علي الباب في حاله الفلق التام ",english : "close force", min:1,max:15},
    {id: "p15",arabic:"مقدار القوه المضاده في حاله الاعاقه",english : "pressure force", min:0,max:99},
    {id: "p16",arabic:"عدد محاولات مقاومه الاعاقه",english : "attempts num", min:3,max:10},
    {id: "p17",arabic:"سرعه الباب في حاله حدوث اي حطأ",english : "adjust speed", min:10,max:40},
    {id: "p18",arabic:"سرعه الباب في حاله الطوارئ",english : "Emergrncy rpm", min:25,max:40},
    {id: "p19",arabic:"السرعه عند بدايه الفتح",english : "spd start Open", min:5,max:75},
    {id: "p20",arabic:"نوع المفتاح المستخدم في نهايه المسافات ",english : "limit sw type", min:0,max:1},
    {id: "p21",arabic:"اعاده ضبط المصنع",english : "factory reset", min:0,max:1},
    {id: "p22",arabic:"عدد النبضات المقابله للمسافه الكليه للباب",english : "full pulses", min:70,max:110},
    {id: "p23",arabic:"متروك للمصنع",english : "Reserved", min:0,max:20},
    {id: "p24",arabic:"حد السرعات البطيئه",english : "Reserved", min:0,max:100},//mm
    {id: "p25",arabic:"خاص بالمصنع",english : "sw debouncing", min:10,max:25},
    {id: "p26",arabic:"وقت الانتظار بعد انقطاع التيار الكهربائي للدخول في حاله الطوارئ",english : "Emergency time", min:1,max:10},
    {id: "p27",arabic:"رمز الدخول لشبكه الواي فاي",english : "Wifi password", min:0,max:99999999},
    {id: "p28",arabic:"رمز الدخول لتطبيق الهاتف",english : "log in password", min:0,max:9999},
    {id: "p29",arabic:"متروك للمصنع",english : "Kl @ ending", min:1,max:10},
    {id: "p30",arabic:"متروك للمصنع",english : "Reserved", min:0,max:200},
    {id: "p31",arabic:"متروك للمصنع",english : "Reserved", min:0,max:100},
    {id: "p32",arabic:"الضبط اليدوي",english : "manual adj speed", min:5,max:25},
    {id: "p33",arabic:"متروك للمصنع",english : "dv_dt_level", min:1,max:100},
    //
    {id: "p34",arabic:"زمن الانتظار بعد العطل",english : "fault_wait_time", min:0,max:100},
    {id: "p35",arabic:"متروك للمصنع",english : "door_test", min:0,max:1},
    {id: "p36",arabic:"متروك للمصنع",english : "self_test_mode", min:0,max:1},
    {id: "p37",arabic:"متروك للمصنع",english : "spare9", min:0,max:200},
    {id: "p38",arabic:"بدايه زمن التهدئه في حاله الفتح و الغلق",english : "ending_stop_time", min:50,max:200},
]
const Terms=()=>{
    const [sowpopup,setSowpopup]=useState(false);
    const [min , setMin]=useState()
    const [max,setMax]=useState()
    // this is function that control appearing the popup an pass the min and max value to its term
    const popupappear=(min,max)=>{
        setSowpopup(!sowpopup);
        setMin(min);
        setMax(max);
    }

    return(
        <div className={style.termcontainer}>
            {sowpopup && <Popup disappear={popupappear} min={min} max={max}/>}
            { 
                terms.map((term)=>{
                    return <Termcard key={term.id} id={term.id} arabic={term.arabic} english = {term.english} onclick={popupappear.bind(this, term.min , term.max)}/>
                })
            }
        </div>
    )
}
export default Terms