import React, { useState } from "react";
import "./Home.css";


function Home() {
    const [count, setCount] = useState(0);
    
    const handleIncr =()=>{
        setCount(count => count +1);
    }

    const handleDelete = ()=> {
        setCount(count => count - 1);
    }
    
    return (
        <div className="contain ">
    
            <button className="btn" onClick={handleDelete} >
                -
            </button>
            <div className="counter_box la">
               <h2>{count}</h2> 
            </div>
            <button className="btn" onClick={handleIncr}>
                +
            </button>
            <div className="reset">
                <button className="btn" onClick={()=>setCount(0)}>
                    Reset
                </button>
            </div>
        </div>
    )
}

export default Home;
