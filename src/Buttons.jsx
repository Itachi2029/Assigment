import React from "react";

function Buttons(props){
    return <button onClick={props.onClick} style={{fontSize:22,width: 44,padding:1}}>{props.name}</button>
}

export default Buttons;