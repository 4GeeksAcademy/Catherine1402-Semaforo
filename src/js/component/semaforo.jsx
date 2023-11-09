import React, {useState} from "react";
export default function Semaforo() {
    const [ color, setColor ] = useState("red");
  
    
    return  ( 
    <div className="d-flex justify-content-center flex-column align-items-center m-2">
        <div className="d-flex bg-dark" style={{width:"25px", height:"150px"}}></div>
        <div className="d-flex justify-content-center flex-column align-items-center bg-dark rounded-4" style={{width:"150px"}}>
            <div className= {"d-flex rounded-circle bg-danger m-1 "+ (color === "red" ? "selected" : "" )} style={{width:"110px", height:"110px"}}
            onClick={()=>{ setColor("red")}}></div>
            <div className= {"d-flex rounded-circle bg-warning m-1 "+ (color === "yellow" ? "selected" : "" )} style={{width:"110px", height:"110px"}}
            onClick={()=>{ setColor("yellow")}}></div>
            <div className={"d-flex rounded-circle bg-success m-1 "+ (color === "green" ? "selected" : "" )} style={{width:"110px", height:"110px"}}
            onClick={()=>{ setColor("green")}}></div>
        </div>

    </div>
    



    )} 





