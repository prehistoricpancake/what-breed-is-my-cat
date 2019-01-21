import React from 'react';

const CatRecognition = ({ imageUrl}) => {
    return(
  <div className = 'center ma'>
  <div className ="absolute mt2">
   <img src={imageUrl} alt="cats"  width='500px' height='auto'/>
   <div className="ph3 mt4">
   {/* <a className="f6 link dim ba bw1 ph3 pv2 mb2 dib near-black" id="imageres" >Results</a> */}
   {/* <p>{response} </p> */}
   
   </div>
   </div>
  </div>

    )}

export default CatRecognition;