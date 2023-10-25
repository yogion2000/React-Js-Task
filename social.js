import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import './social.css'

export default function Social(){
    return (
        <div className="bgs d-flex flex-column align-items-center">
            <h1 className="heading mt-5">Social Buttons</h1>
            <div className="d-flex justify-content-around box">
            <div><button type="button" class="btn btn-warning">Like</button></div>
            <div><button type="button" class="btn btn-light">Comment</button></div>
            <div><button type="button" class="btn btn-primary">Share</button></div>
            </div>
        </div>
    )
}