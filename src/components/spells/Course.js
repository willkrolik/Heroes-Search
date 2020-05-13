import React from 'react';

const Spell = (props) => (
  <li className="course media group">
    <img className="course-img" src={props.img} alt="spell" />
    <div>
      <h3>{props.Name}</h3>
      <p>{props.desc}</p>
      <p>Level:{props.Level}</p>
      <p className={props.Class}>Class: {props.Class} </p>
      <p>Effect: {props.Effect}</p>
      <p>Basic Effect: {props.Basic}</p>
      <p>Advanced Effect: {props.Advanced}</p>
      <p>Expert Effect: {props.Expert}</p>
      <p>Cost:{props.Cost}</p>
      <p>Duration:{props.Duration}</p>
      <p>Probability:{props.Probability}</p>

    </div>
  </li>
);

export default Spell;