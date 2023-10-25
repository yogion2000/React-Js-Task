import React, { useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
export default function Dat(){
    const[CourseDat,setCoursedat]=useState("");
    function change(){
    const dat=document.getElementById("dateNew").value;
    const dateGet=new Date(dat);
    dateGet.setDate(dateGet.getDate()+90);
    const dater=dateGet.getDate();
    const monthr=dateGet.getMonth()+1;
    const yearr=dateGet.getFullYear();
    const dateFinal=(dater+"/"+monthr+"/"+yearr);
    setCoursedat(dateFinal);
    alert(dateFinal)
    }

    return(
        <div className="d-flex justify-content-center align-items-center" style={{height:"100vh",backgroundImage: "linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)"}}>
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h3 className="text-center">Enter the course starting date</h3>
            <input type="date" className="form-control" id="dateNew"/>
            <button type="button" class="btn btn-secondary mt-2 mb-2" onClick={change}>Submit</button>
            <h3>Course will be completed with in <span style={{color:"orange"}}>{CourseDat}</span></h3>
        </div>
        </div>
    );
}

