import React from "react";

export class PureDemo extends React.PureComponent{

    constructor()
    {
        super();
        this.state={
            electronics:["Tv","Laptop","Mobile"],
        }
    }

    HandleLoadClick(){
        this.setState(
            {
                electronics:["Tv","Laptop","Mobile","phone"]
            }
        )
    }

    componentDidUpdate(){
        console.log("Component Updated")
    }
    
    render(){

        return (
            <div className="container-fluid">
                <h1>List of Electronics  <button onClick={this.HandleLoadClick.bind(this)}>Load</button></h1>

                <ol>
                    {
                        this.state.electronics.map(item=>(
                            <li key={item}>{item}</li>
                        ))
                    }
                </ol>
            </div>
        )
    }

}