import { Outlet,Link } from "react-router-dom";
import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export default function Rating(){
    return(
        <div className="d-flex justify-content-center align-items-center" style={{height:"100vh",backgroundImage:"linear-gradient(to right,#fcebec,#f9bbbd)"}}>
            <div className="d-flex flex-column align-items-center justify-content-around rounded-5 bg-light ms-2 me-2" style={{width:"50vw",height:"50vh",textAlign:"center"}}>
                <h4 className="text-wrap text-fluid">How satisfied are you with our customer support perfromance</h4>
            <div className="d-flex justify-content-around m-2" style={{width:"50vw"}}>
                <div className="d-flex flex-column" style={{width:"fit-content"}}>
                    <Link to="/Thanks"><img className="img-fluid" src="https://cdn-icons-png.flaticon.com/128/1791/1791330.png" alt="sad"/></Link>
                    <p className="text-center">Sad</p>
                </div>
                <div className="d-flex flex-column" style={{width:"fit-content"}}>
                <Link to="/Thanks"><img className="img-fluid" src="https://cdn-icons-png.flaticon.com/128/356/356761.png" alt="none"/></Link>
                    <p className="text-center">None</p>
                </div>
                <div className="d-flex flex-column" style={{width:"fit-content"}}>
                <Link to="/Thanks"><img className="img-fluid" src="https://cdn-icons-png.flaticon.com/128/520/520464.png" alt="happy"/></Link>
                    <p className="text-center">Happy</p>
                </div>
            </div>    
            </div>
        </div>
    );
}