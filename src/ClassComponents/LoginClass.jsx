import React from "react";

export class LoginClassComponent extends React.Component{

    constructor(){
        super();
        this.state={
            msg:""
        }

        this.HandleClick=this.HandleClick.bind(this);
        
        
    }

    HandleClick(){
        this.setState({msg:"Login Successful"})
    }
    render(){
        return(
            <React.Fragment>
                <div className="container-fluid">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button onClick={this.HandleClick}  id="butttonId" type="submit">Login</button>
                <p>{this.state.msg}</p>
                </div>
            </React.Fragment>
        )
    }
}