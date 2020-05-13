import React from 'react';

const Unit = (props) => (
  <li className="course media group">
    <img className="course-img" src={props.img} alt="unit image" />
    <div>
      <h3>{props.Name}</h3>
      <p>Faction: {props.Town}</p>
      <p>Level:{props.Level}</p>
      <p>Attack: {props.Attack} </p>
      <p>Defense: {props.Defense}</p>
      <p>Damage: {props.Damage}</p>
      <p>Health: {props.Health}</p>
      <p>Speed: {props.Speed}</p>
      {props.Flying && <p>Flying{props.Flying}</p>}
      {props.Archer && <p>Archer{props.Archer}</p>}
      { props.Shots && <p>Shots:{props.Shots}</p>}
      <p>Size:{props.Size}</p>
      <p>Growth:{props.Growth}</p>
      {props.Upgraded && <p>Upgraded{props.Upgraded}</p>}
      <p>Cost:{props.Cost}</p>
      {props.Special && <p>Special:{props.Special}</p>}

    </div>
  </li>
);

export default Unit;