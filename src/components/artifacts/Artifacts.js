import React from 'react';

const Artifacts = (props) => (
  <article className="course media group">
    <img className="course-img" src={props.img} alt="Artifact" />
    <div>
        <h3>{props.Name}</h3>
        <p>Slot: {props.Slot}</p>
        <div>
        <p>Class:{props.Class}</p>
        <p>Cost:{props.Cost}</p>
        </div>
      
        
        

     
      <p>Effect: {props.Effect}</p>
      {props.Combination && <p>Combination: {props.Combination}</p>}
      </div>
      
      
  

   
  </article>
);

export default Artifacts;