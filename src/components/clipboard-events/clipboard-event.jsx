import { useState } from "react"


export function Clipboard(){

    const [msg,setMsg]=useState('');

    function HandleCut(){
        setMsg("Removied from clipboard");

    }
    function HandleCopy(){
        setMsg("Copied to clipboard");
    }

    function HandlePaste(){
        setMsg("Pasted from clipboard");
    }

    return(
        <div className="container-fluid m-4" >
            <h1>Clipboard Events</h1>
            <textarea onCut={HandleCut}  onCopy={HandleCopy} onPaste={HandlePaste} rows="4" cols="100">

            </textarea>
            <div>{msg}</div>
        </div>
    )
}