import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function HtmlDemo()
{
    return (
        <div>
        <h3>HTML Tutorial</h3>
        <p>HTML stands for Hypertext Markup Language.</p>
    </div>
    )
}

export function RouterDemo(){

    return(
        
        <div className="container-fluid">
            <BrowserRouter>
            <h2>List of Languages To learn in Web Dev</h2>

            <ol>
                <li><Link to={"html"}>HTML</Link></li>
                <li> <Link to={"css"}>CSS</Link> </li>
                <li><Link to={"js"}>JS</Link> </li>
            </ol>

            <hr ></hr>
            <Routes>
                <Route path="html" element={<HtmlDemo/>}/>
                <Route path="css" element={
                    <div>
                        <h3>CSS Tutorial</h3>
                        <p>CSS stands for Cascading Style Sheets.</p>
                    </div>
                }
                />
                <Route path="js" element={
                    <div>
                        <h3>JavaScript Tutorial</h3>
                        <p>JavaScript is a programming language that adds interactivity to web pages.</p>
                    </div>
                }
                />
            </Routes>
</BrowserRouter>
        </div>
    )
}