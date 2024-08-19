import { useEffect, useState } from "react"


export function TimeInterval() {

    const [msg,setMsg]=useState('');

    const[imgs,setImgs]=useState(["images/img1.jpg","images/img2.jpg","images/img3.jpg","images/img4.jpg"]);

    const[image,setImage]=useState("");
    
    const[status,setStatus]=useState(1);

    var val=1;

    function Loading(){
        val++;
        setStatus(val);
    }


    var count=0;

    function LoadImages(){
        setImage(imgs[count%imgs.length]);
        count=count+1;

    }

    function shwTime(){

        var now=new Date();
        setMsg(now.toLocaleTimeString());
    }

    function m1(){
        setMsg("Msg1 ");
    }
    function m2(){
        setMsg("Msg2 ");
    }
    function m3(){
        setMsg("Msg3 ");
    }
    

    useEffect(()=>{
    setInterval(shwTime);
    setInterval(Loading,100);
    setInterval(LoadImages,3000);

        // setTimeout(m1,3000);
        // setTimeout(m2,6000);
        // setTimeout(m3,9000);

},[]);

    return (

        <div className="container-fluid">
            <h2>Timer Intervals</h2>
            <h1 className="text-center">{msg}</h1>
            <div>
                <img src={image} width="500" height="300" />
            </div>
            <div className="spinner-border text-center">
                <p >{status}%</p>
            </div>
        </div>
    )

}
