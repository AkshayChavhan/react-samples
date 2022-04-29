import React , { useState ,useEffect } from "react";
import "./NewFileCss.css";


function NewFile(){
    const [ timer , setTimer ] = useState(false);
    const [ count , setCount ] = useState(0)
    
    useEffect(()=>{
        let interval = null;
        if(timer){
           interval = setInterval(() =>{
            setCount( previousState =>previousState + 10);
            } ,10)
        }else{
            clearInterval(interval);
        }
        console.log(timer);

        return () => clearInterval(interval);

    },[timer])

    return(
        <>
            <div className="container" >
                <div className="display">
                    <header>
                    <h1>{("0" + Math.floor(( count / 60000 ) %60 )).slice(-2)}
                    :
                    {("0" + Math.floor(( count / 1000 ) %60 )).slice(-2)}
                    :
                    {("0" + (( count / 10 ) %100 )).slice(-2)}
                    </h1>
                    </header>
                </div>
                <div className="btn">
                    <button onClick={()=>{
                        setTimer(true);
                        console.log("fired start");
                        }
                        }>Start</button>
                    <button onClick={()=>{
                        setTimer(false);  
                        console.log("fired Stop"); 
                    }}>Stop</button>
                    <button onClick={()=>{ 
                        setTimer(true);
                        console.log("fired Resume"); 
                    }}>Resume</button>
                    <button onClick={
                        () => setCount(0)
                        }>Reset</button>
                </div>
            </div>
        </>
    )
}

export default NewFile ;