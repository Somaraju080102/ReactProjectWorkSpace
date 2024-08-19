import { useEffect, useState } from "react"

export function KeyDemo(){

    const [users]=useState([{"UserName": "naga"}, {"UserName":"Somaraju"}]);

    const [userError,setUserError] = useState('');

    const [userClass,setUserClass] = useState('');
    
    const[passError,setPassError] = useState('');

    const [dispError,setDispError] = useState({'display':''});

    const [textCase,setTextCase] = useState('');

    function HandleKeyChange(e){

        for (var val of users){
            // console.log(val.UserName);
            if(val.UserName === e.target.value){
                console.log(val.UserName);
                setUserError("User Name Already Exists");
                setUserClass("text-danger");
                break;
            }
            else{
                setUserError("User Name Availabe");
                setUserClass("text-success");
            }
         }

    }
    function HandleKeyPress(e){

        if(e.which>=65&e.which<=91){
            console.log(e.which);
           setPassError("Caps On")
           setDispError({'display' : ''}); 
        }
        else{
            setDispError({'display' : 'none' });
        }
    }

    function CovertCase(){
        setTextCase(textCase.toUpperCase());
    }
    function HandleChangecase(e){

        setTextCase(e.target.value);


    }
    return(
        <div className="container-fluid">
            <dl>
                <dt>User Name</dt>
                <dd><input onChange={HandleChangecase} value={textCase} onBlur={CovertCase} onKeyUp={HandleKeyChange} type="text" placeholder="Enter Your Name"></input></dd>
                <dt>Password</dt>
                <dd><input onKeyPress={HandleKeyPress} type="password" placeholder="Enter Your Password"></input></dd>
                <div><span style={dispError} className="bi bi-fan">{passError}</span></div>
            </dl>
            <div className={userClass}>{userError}</div>
            <div ></div>
        </div>
    )
}