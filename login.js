import React from "react";
import './login.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import {AiFillMail,AiFillLock} from "react-icons/ai";

export default function Login(){
    return(
        <div className="d-flex justify-content-center align-items-center maindiv">
            <div className="row box1 rounded-5">
                <div className="d-flex align-items-center col-lg-6 justify-content-center">
                    <div className="circle d-flex align-items-center justify-content-center"><img src="https://cdn-icons-png.flaticon.com/128/189/189561.png"></img></div>
                </div>
                <div className="col-lg-6 d-flex flex-column align-items-center">
                    <h3>Member Login</h3>
                    <div className="rounded-5 p-1 mt-3 d-flex align-items-center" style={{backgroundColor:"#e5e5e5",width:"fit-content"}}><AiFillMail/><input  type="email" style={{border:"0px",backgroundColor:"#e5e5e5"}} placeholder="Email" className="ms-2 me-3 form-control" ></input></div>
                    <div className="rounded-5 p-1 mt-3 d-flex align-items-center" style={{backgroundColor:"#e5e5e5",width:"fit-content"}}><AiFillLock/><input type="password" style={{border:"0px",backgroundColor:"#e5e5e5"}} placeholder="Password" className="ms-2 me-3 form-control"></input></div>
                    <div className="mt-3"><button type="button" class="btn text-white rounded-5 btn-lg" style={{backgroundColor:"#1fcc44"}}>Login</button></div>
                    <p>Forget<span style={{color:"#1fcc44"}}> Username / Password?</span></p>
                    <p style={{color:"#1fcc44"}}>Create your account &rarr;</p>
                </div>
            </div>
        </div>
    );
    }
