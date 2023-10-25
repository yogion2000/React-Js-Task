import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export default function Rating(){
    return(
        <div className="d-flex justify-content-center align-items-center" style={{height:"100vh",backgroundImage:"linear-gradient(to right,#fcebec,#f9bbbd)"}}>
            <div className="d-flex flex-column align-items-center justify-content-around rounded-5 bg-light" style={{width:"50vw",height:"50vh",textAlign:"center"}}>
            <img src="https://cdn-icons-png.flaticon.com/128/2589/2589175.png" alt="heart"/>
            <h4>Thank you!</h4>
            <p style={{fontFamily:"sans-serif"}}>We will use your feedback to improve our customer support performane</p>  
            </div>
        </div>
    );
}