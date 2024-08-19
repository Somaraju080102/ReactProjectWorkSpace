import { useState } from "react"


export function FormReact(){


    const [data,setData]=useState({uname:" ",uemail:" ",upasswd:""});

    function HandleUserNameChange(e){

        var val=e.target.value;
        setData({
            uname:val,
            uemail:data.uemail,
            upasswd:data.upasswd
            
        });
    }

    function HandleEmailChange(e){
        var val=e.target.value;
        setData({
            uname:data.uname,
            uemail:val,
            upasswd:data.upasswd
        })

    }
    
    function HandlePasswordChange(e){
        var val=e.target.value;
        setData({
            uname:data.uname,
            uemail:data.uemail,
            upasswd:val
        })
    }

    function HandleSubmitData(){

        alert(JSON.stringify(data));
        console.log(JSON.stringify(data))
    }


    return(
        <div className="container-fluid">
            <form onSubmit={HandleSubmitData}  >
                <dl>
                    <dt>Name</dt>
                    <dd onChange={HandleUserNameChange}><input type="text"  autoComplete="off" /></dd>
                    <dt>Email</dt>
                    <dd onChange={HandleEmailChange}><input type="email" /></dd>
                    <dt>Password</dt>
                    <dd onChange={HandlePasswordChange}><input type="password" /></dd>
                    <button>Submit</button>
                </dl>
            </form>

        </div>
    )
}