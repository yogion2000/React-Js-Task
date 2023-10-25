import React from "react";
import './notification.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import {CiCircleCheck,CiCircleAlert,CiBellOn} from "react-icons/ci";


export default function Noti(){
    return(
        <div className="d-flex flex-column align-items-center" style={{heigth:"100vh"}}>
            <h1>Notifications</h1>
            <div className="d-flex bg-primary align-items-center divs ps-2 m-3">
            <CiCircleCheck/><p className="pt-3 text-white ms-2">Information Message</p>
            </div>
            <div className="d-flex bg-success align-items-center divs ps-2 m-3">
            <CiCircleCheck/><p className="pt-3 text-white ms-2">Successe Message</p>
            </div>
            <div className="d-flex bg-warning align-items-center divs ps-2 m-3">
            <CiCircleAlert/><p className="pt-3 text-white ms-2">Warning Message</p>  
            </div>
            <div className="d-flex bg-danger align-items-center divs ps-2 m-3">
            <CiBellOn/><p className="pt-3 text-white ms-2">Error Message</p>  
            </div>
        </div>
    );
}