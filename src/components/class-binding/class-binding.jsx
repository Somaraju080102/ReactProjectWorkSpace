import { useState } from "react"

export function ClassBinding(){

    const [theme,setTheme]=useState('');
    const [buttontheme,setButtonTheme]=useState('btn btn-primary w-100');

    function HandleThemeChange(e){

        if(e.target.checked){
            setTheme('bg-dark text-white');
            setButtonTheme('btn btn-light w-100');
        }
        else{
            setTheme('');
        }
    }

    
    return (
        
        <div className="container-fluid">
            <div className="d-flex align-items-center justify-content-center" style={{height:"500px"}}>
                <form className={theme}>
                    <div className="mt-4 mb-4 form-switch">
                        <input type="checkbox" onChange={HandleThemeChange} className="form-check-input"/>Dark Mode

                    </div>
                    <h2 className="bi bi-person-fill">User Login</h2>
                    <dl className="bi bi-bi-person-fill">
                        <dt>Username</dt>
                        <dd><input type="text" className="form-control w-90" placeholder="Enter Your Name"></input></dd>
                        <dt>Password</dt>
                        <dd><input type="password" className="form-control" placeholder="Enter Your Password"></input></dd>
                        <button className={buttontheme} >Login</button>
                    </dl>
                </form>
            </div>
        </div>
    )
}