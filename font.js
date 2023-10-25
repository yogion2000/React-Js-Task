import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {BsFillAirplaneEnginesFill} from "react-icons/bs";

export default function Font(){
    return(
    <div>
    <BsFillAirplaneEnginesFill/>
    <FontAwesomeIcon icon={faEnvelope} />
    </div>
);
}