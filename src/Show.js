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
    
        display.map(({show})=>
          arr.push(show.Money)
        )
       arr.forEach(i => {
         arr[i] = parseInt(arr[i])
       });

       return arr
    }



    return (
        
        <div className="disp">
         {cal()}
       
        </div>
     
    )
}

export default Show;
