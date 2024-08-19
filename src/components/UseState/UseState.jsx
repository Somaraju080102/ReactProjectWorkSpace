import { useState } from "react"


export function UseState(){

    const [name , setName]=useState("mutable");

    const [bodyCount]=useState(["mia","khalifa","sunny"]);

    function HandleClick(data){
        const ans=data.target.value;
        setName(ans);

    }


    return (
        <div className="container-fluid">

            <h2>Welocme To Use State Component tutorial</h2>
            <h3>Hello I am {name}</h3>
            <h4>Body Count</h4>
            <ol>
                {
                    bodyCount.map(item=>(
                        <li key={item}>{item}</li>
                    ))
                }
            </ol>
            <form>
                <label >Name</label>
                <input type="text" value={name} onChange={HandleClick} />
                <h2>Hi {name}</h2>
            </form>
            {/* <button className="btn btn-primary " id="buttonid" name="clickbutton" onClick={HandleClick}>Click Me </button> */}
        </div>
    )
}