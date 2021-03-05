import React from 'react';
import "./App.css";

function Btn(props){
    return(
        <button className={props.btnclass} name={props.btnname}  onClick={props.btnfn}>{props.btntext}</button>
    )
}

export default Btn;

{/* <Btn btnclass="" btnfn={handleClick} btnname=""  btntext="" /> */}