import { useEffect, useState } from "react";


export function StyleBinding(){

    
// const [inputName, setInputName]=useState('');

// const [objStyle, setObjStyle]=useState({'border':'','box-shadow':''});

const [styles,setStyles]=useState({'fontSize':'10px','color':'black'});



function HandleFontChange(e){
    setStyles({
        fontSize:e.target.value+"px",
        color:styles.color
    })
}
function HandleColorChange(e){
    setStyles({
        fontSize:styles.fontSize,
    color:e.target.value
    
    })
}
    return (
        <div className="container-fluid">
            <dl>
                <dt><h2>Font Size</h2></dt>
                <dd><input  type="range" min="10" max="100" onChange={HandleFontChange}></input></dd>
                <dt><h3>Color</h3></dt>
                <dd><input type="color" onChange={HandleColorChange}></input></dd>
                <p className="text-center" style={styles}>Sample Text</p>
            </dl>
        </div>
    )
}