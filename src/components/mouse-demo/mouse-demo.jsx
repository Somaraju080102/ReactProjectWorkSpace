import { useState } from "react"


export function MouseDemo(){

    const [photos]=useState(["images/img1.jpg", "images/img2.jpg","images/img3.jpg","images/img4.jpg"]);

    const [imgpreview, setImagepreview] = useState("");

    function HandlePreview(e){
        setImagepreview(e.target.src);
    }
    function HandleMouseOver(e){
        e.currentTarget.stop();
    }
    function HandleMouseOut(e){
        e.currentTarget.start();
    }


    return(
        <div className="container-fluid">
            <div>
                <marquee scrollamount="50" onMouseOver={HandleMouseOver} onMouseOut={HandleMouseOut}>
                    {
                        photos.map(photo=>(
                            <img key={photo}  className="m-2 border border-danger w-25 h-25" src={photo}/>
                        ))
                    }
                </marquee>
            </div>
{/* 
            <section className="row ">
                <nav className="col-2">
                    {
                        photos.map(photo=>(
                            <div key={photo}>
                                <img onMouseOver={HandlePreview} className="m-2 border border-danger w-75 h-25" src={photo}/>
                            </div>
                        ))
                    }
                </nav>
                <main className="col-10 border border-4 border-primary">
                    <img className="w-75 h-50" src={imgpreview} alt="preview"/>
                </main>
            </section> */}

        </div>
    )
}