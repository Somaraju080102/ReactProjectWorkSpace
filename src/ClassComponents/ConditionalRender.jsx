import React from "react";

export class ToolLayout extends React.Component {
    
    constructor(props){
        super(props);  // Make sure to pass props to the super class
    }

    render(){
        if(this.props.layout === "vertical"){
            return (
               <nav>
                <div className="bi bi-facebook">Facebook</div>
                <div className="bi bi-twitter">Twitter</div>
                <div className="bi bi-instagram">Instagram</div>
                <div className="bi bi-linkedin">LinkedIn</div>
               </nav>
            );
        } else {
            return (
                <nav className="d-flex">
                 <div className="bi bi-facebook">Facebook</div>
                 <div className="bi bi-twitter">Twitter</div>
                 <div className="bi bi-instagram">Instagram</div>
                 <div className="bi bi-linkedin">LinkedIn</div>
                </nav>
             );
        }
    }
}

export class ConditionalRendering extends React.Component {

    constructor(){
        super();
        this.state = {
            layout: ""
        };
    }

    SelectChange(e){
        this.setState({layout: e.target.value});
    }

    render(){
        return (
            <div className="container-fluid">
                <div className="w-25">
                <h2>Select a Layout</h2>
                <select onChange={this.SelectChange.bind(this)} className="form-select">
                    <option value="-1">Select</option>
                    <option value="horizontal">Horizontal</option>
                    <option value="vertical">Vertical</option>
                </select>
                </div>
                <ToolLayout layout={this.state.layout} />
            </div>
        );
    }
}
