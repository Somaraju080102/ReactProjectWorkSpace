import React from "react";
import { LoginClassComponent } from "./LoginClass";

export class LgoinClassComponent extends React.Component{

    constructor(props){
        super(props);
        }
    
    render(){
        return(
            <div className="container-fluid">
                <h1>{this.props.logintitle}</h1>
                <dl>
                    <dt>{this.props.username}</dt>
                    <dd><input type="text" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" /></dd>
                    <button type="submit">Login</button>
                </dl>

            </div>
        )
    }
}

export class HomeLoginComponent extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <h1>Home Page</h1>
                <LgoinClassComponent logintitle="Login Credentials" username="Enter Your UserName"/>
            </div>
        )
    }
}