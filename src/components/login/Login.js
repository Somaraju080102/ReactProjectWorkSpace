import "./Login.css"

export function Login(){
    var username=prompt("enter name");

    return(


        <div>
            <div className="Login containerfluid">
                <h1>Username</h1>
                <input type="text" placeholder={username}/>
                <h1>Password</h1>
                <input type="password" placeholder="Enter password"/>
            </div>
        </div>
    )
}