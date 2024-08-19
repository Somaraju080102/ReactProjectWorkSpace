import { useState } from "react" 

import { useEffect } from "react"

export function NasaComponent(){

    const[mars,setMars]=useState( { photos:[] })

  
    useEffect(() => {
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
            .then(val => val.json())
            .then(response => setMars(response))
            .catch(error => console.error("Error fetching data:", error));
    }, []); // Ensure the effect runs only once


    return (
        
        <div className="container-fluid">
            <center className="m-4"><h2><b>Mars Rover Photos</b></h2></center>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Photo ID</th>
                        <th>Preview</th>
                        <th>Camera Name</th>
                        <th>Rover Name</th>
                    </tr>
                </thead>
                <tbody>
                    {mars.photos && mars.photos.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>
                                <img src={item.img_src} alt="Mars" width="200px" height="200px" />
                            </td>
                            <td>{item.camera.full_name}</td>
                            <td>{item.rover.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
         </div>
    )
}