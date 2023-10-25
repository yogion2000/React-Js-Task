import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import './super.css'

export default function Super(){
    return(
        <div className="text-center boxe bg-dark text-light container-fluid">
        <h1>Super Over League</h1>
        <div className="m-3">
        <img className="img-fluid col-4" src="https://assets.ccbp.in/frontend/react-js/rcb-img.png"/>
        <img className="img-fluid col-4" src="https://assets.ccbp.in/frontend/react-js/csk-img.png"/>
        </div>
        </div>
    )
}