import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import { useState } from "react";

export default function Fruits(){
    const[mangoes,setmangoes]=useState(0);
    const[bananas,setbananas]=useState(0);
    return(
        <div className="d-flex justify-content-center align-items-center" style={{backgroundColor:"#f9d775", height:"100vh"}}>
            <div className="d-flex flex-column justify-content-around rounded-5" style={{backgroundColor:"white",width:"fit-content",height:"400px"}}>
                <h2 className="text-center m-3">Bob ate <span style={{color:"orange"}}>{mangoes}</span> mangoes <span style={{color:"orange"}}>{bananas}</span> bananas </h2>
                <div className="d-flex justify-content-around">
                    <div className="d-flex flex-column">
                        <img className="img-fluid" src="https://cdn-icons-png.flaticon.com/128/9432/9432974.png" alt="mango"/>
                        <button type="button" class="btn btn-primary mt-3" onClick={()=>setmangoes(mangoes+1)}>Eat Mango</button>
                    </div>
                    <div className="d-flex flex-column">
                        <img className="img-fluid" src="https://cdn-icons-png.flaticon.com/128/10247/10247513.png" alt="banana"/>
                        <button type="button" class="btn btn-primary mt-3" onClick={()=>setbananas(bananas+1)}>Eat Banana</button>
                    </div>
                </div>
            </div>
        </div>
    );
}