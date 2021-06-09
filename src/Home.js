import React from 'react';
import {useState,useEffect} from 'react';
import db from './Config/Config';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Home.css';
import Show from './Show';

function Home() {

    const [remark, setRemark] = useState('');
    const [final, setFinal] = useState('');
    const [amount, setAmount] = useState('');
    

    const handlesubmit = (e) => {
        e.preventDefault();

        db.collection('Register').add({
            Title: remark,
            Money : amount,
        })
    
        setRemark('');
        setAmount('');
    };


    return (
        <div className="container">
           <Show />
            <form className="Form" onSubmit={handlesubmit} >
            <div>
            <TextField id="outlined-basic" label="Amount" required
            variant="outlined"  margin="normal" value={amount} datatype = "int"
            onChange={(e)=> setAmount(e.target.value )} /> 
            </div>
            
            <div>
            <TextField id="outlined-basic" label="Remark" required
            variant="outlined" margin="normal"  value={remark} 
            onChange={(e)=> setRemark(e.target.value )} /> 
            </div>
            
            <div className="btn" >
            <Button variant="outlined" type="submit">
               Save
           </Button>
            </div>

        </form>  
        </div>
    )
}

export default Home;
