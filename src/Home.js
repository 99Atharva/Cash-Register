import React from "react";
import "./Home.css";
import img1 from "./Elements/Logo.png";
import img2 from "./Elements/time.svg";
import img3 from "./Elements/comm.svg";
import img4 from "./Elements/play.svg";





function Home() {

    const Magnify =  {
        
    }

    return (
        <div className="contain ">
       <div className="1st_half">
       <div className="logo">
            <img src={img1}/> <h4>COLEARN</h4>
            <div className="nav">
                <ul >
                <li>Product</li>
                <li>Pricing</li>
                <li>Contacts</li>
                <li>Sigin</li>
                </ul>
            </div>
        </div>
        <div className="left_box">
        <p className="head">Efficient learning,<br/>
        made simpler.</p>

        <p className="text">Find box a little too small and curl up with fur hanging out mew mew i just saw other cats inside the house and nobody ask me before using my litter box. Scratch me there, elevator butt eat my own ears throwup on your pillow paw at Intently sniff hand bleghbleghvomit my furball really tie the</p>
        <div className="btn_grp ">
            <button>Get Started</button>
            <button id="btn2"> <img src={img4}/>See how it works</button>
        </div>

        <div className="last_container_left">
            <div className="box">
            <img className="icon" src={img2}/>
            <h3>Learning</h3>
            <p>Find box a little too small and curl fur hanging out mew mew </p>
            </div>
            <div className="box">
                
               <img className="icon" src={img3} /> 
               <h3>Community</h3>
               <p>Find box a little too small and curl fur hanging out mew mew </p>
            </div>
        </div>
        </div>
        
       </div>
        
        </div>
    )
}

export default Home;
