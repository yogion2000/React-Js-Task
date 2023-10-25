import React from "react";
import { useState,useEffect, } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

export default function JasonDat(){
    const [dat,setdat]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/data.json")
        .then(res=>res.json())
        .then(details=>setdat(details))
    })

    return(

        dat.map((index,value)=>(
            <div className="card mt-3" style={{width:"18rem",marginLeft:"40vw"}} >
            <img src={index.img} class="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{index.FirstName} {index.LastName}</h5>
            <p className="card-text">{index.Address}</p>
            <p className="card-text">{index.Gender}</p>
            <a href="#" class="btn btn-primary">More Details</a>
            </div>
            </div>
        )
        )
    );
}