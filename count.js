import { useState } from "react";
import React from "react";
import './count.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

export default function Count(){
    const[count,setcount]=useState(0);
    return(
        <div className="d-flex justify-content-center align-items-center countMain">
        <div className="countBox">
        <p className="text-center countOut">{count}</p>
        <div className="countBtn d-flex justify-content-around">
        <button type="button" className="btn btn-outline-success ms-1 me-1" onClick={()=>setcount(count+1)}>Add</button>
        <button type="button" className="btn btn-outline-warning ms-1 me-1" onClick={()=>setcount(count-1)}>Sub</button>
        <button type="button" className="btn btn-outline-danger ms-1 me-1" onClick={()=>setcount(0)}>Reset</button>
        </div>
        </div>
        </div>
    );
}