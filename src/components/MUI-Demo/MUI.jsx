import TextField from '@mui/material/TextField';

import { useFormControl } from '@mui/material/FormControl';
import { useFormik } from 'formik';
import { useState } from 'react';


export function MuiDemo(){

    const[name,setName]=useState("");

    function handleChange(e){
        setName(e.target.value);
    }

    return(
        <div className="container-fluid">
            <h1>Bootsrap Input</h1>
            <label className="form-label">            <input type="text" placeholder="Enter Your Name"/>
            </label>
            <h1>MUI Input</h1>
            <TextField id="time" type="text" onChange={handleChange} label="Name" variant='filled'/>
            <p>Hi {name}</p>
        </div>
    )
}