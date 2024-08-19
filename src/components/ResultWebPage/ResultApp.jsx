import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export  function ResultApplication() {
    const [rollNo, setRollNo] = useState('');
    const [studentName, setStudentName] = useState('Somaraju Induuri');
    const [status, setStatus] = useState('P');
    const [results, setResults] = useState([]);

    function HandleResult(e){
        e.preventDefault();
        axios.get("http://localhost:8080/api/data")
        .then(response => {
            console.log('API Response:', response.data);
            setResults(response.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
        // .catch(error => {
        //     console.error('Error fetching data:', error);
        // });
    
        



    }
  

    const backgroundStyle = {
        backgroundImage: 'url("https://www.example.com/path-to-your-image.jpg")', // Replace with your image URL
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const containerStyle = {
        background: 'rgba(255, 255, 255, 0.8)',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        width: '80%',
        maxWidth: '800px',
        textAlign: 'center'
    };


    return (
        <div className="container">
            <center> <header className="my-4">
                <h1>Check Your Result</h1>
            </header></center>
            <section className="mb-4">
                <form className="d-flex justify-content-center" onSubmit={HandleResult}>
                    <input
                        type="text"
                        className="form-control w-50"
                        placeholder="Enter Your Hall Ticket Number"
                        value={rollNo}
                    />
                    <button type="submit"  className="btn btn-primary ms-3">Submit</button>
                </form>
            </section>
            <main className="mb-4">
                <div className="container-fluid d-flex justify-content-around">
                    <div>
                        <h3>Student Name: {studentName}</h3>
                    </div>
                    <div>
                        <h3>Status: {status}</h3>
                    </div>
                </div>
            </main>
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Marks</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((result) => (
                            <tr key={result.subject}>
                                <td>{result.subject}</td>
                                <td>{result.marks}</td>
                                <td>{result.result}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
