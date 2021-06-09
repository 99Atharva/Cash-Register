import React from 'react';
import {useState,useEffect} from 'react';
import db from './Config/Config';
import "./Show.css";

function Show() {
    const [display, setDisplay] = useState([]);

    useEffect(() => { 
        db.collection('Register').onSnapshot(snapshot => {
          
          setDisplay(snapshot.docs.map(doc => ({ 
            show :  doc.data(),
            
          }))) ;
      });
     
    }, []);


    function cal() {
      var arr = [];
      var ar = [];
      
    
        display.map(({show})=>
          arr.push(show.Money)
        )
       arr.map((num)=>
         ar.push(parseInt(num))
       )


       return ar.reduce((a,b)=> a+b,0);

       
    }



    return (
        
        <div className="disp">
         {cal()}      
        </div>
     
    )
}

export default Show;
