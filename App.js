import './App.css';
// import React , { useState } from "react" ;

import NewFile from "./NewFile";

function App() {
  
  // const [square , setSquare ] = useState(true);
  // const [value , setValue ] = useState();
  // const handleClick= () => {
  //     if(value == "square"){
  //       setSquare(true);
  //     }else{
  //        setSquare(false);
  //        console.log(square , value);
  //     }
  // }

  // const squareStyle = {
  //   height: "50px" ,
  //   width : "50px",
  //   backgroundColor :"red"

  // }
  // const circleStyle = {
  //   height: "50px" ,
  //   width : "50px",
  //   backgroundColor :"red",
  //   borderRadius : "50%"
  
  // }
  
  
  return (
    <div className="App">
      <NewFile />
      {/* <select value={value} onChange={(e)=> setValue(e.target.value)}>
        <option value="square">Square</option>
        <option value="circle">Circle</option>
      </select>
      <button onClick={handleClick}>Add shape</button>
      <div className='div#shapes-holder'>
        {
          square ? 
          <div className='square'
           style={squareStyle}></div>
            : 
          <div className='circle' 
          style={circleStyle}></div>
        }
      </div> */}
    </div>
  );
}

export default App;
