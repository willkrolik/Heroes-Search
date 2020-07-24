import React from 'react';

const Unit = (props) => (
  <li className="course media group">
    <img className="course-img" src={props.img} alt="unit image" />
    <h3></h3>
    <table>
      <tr>
        <th>{props.Name}</th>


      </tr>
      <tr>
        <td>Faction</td>
        <td>{props.Town}</td>

      </tr>
      <tr>
        <td>Level</td>
        <td>{props.Level}</td>

      </tr>
      <tr>
        <td>Attack</td>
        <td>{props.Attack}</td>

      </tr>
      <tr>
        <td>Defense</td>
        <td>{props.Defense}</td>

      </tr>
      <tr>
        <td>Damage</td>
        <td>{props.Damage}</td>

      </tr>
      <tr>
        <td>Health</td>
        <td>{props.Health}</td>

      </tr>
      <tr>
        <td>Speed</td>
        <td>{props.Speed}</td>

      </tr>

      {props.Flying && <tr>
        <td>Flying</td>
        <td>True</td>

      </tr>}
      {props.Archer && <tr>
        <td>Archer</td>
        <td>True</td>

      </tr>}
      {props.Shots && <tr>
        <td>Shots</td>
        <td>{props.Shots}</td>

      </tr>}
      <tr>
        <td>Size</td>
        <td>{props.Size}</td>

      </tr>
      <tr>
        <td>Growth</td>
        <td>{props.Growth}</td>

      </tr>
      {props.Upgraded && <tr>
        <td>Upgraded</td>
        <td>True</td>

      </tr>}
      <tr>
        <td>Cost</td>
        <td>{props.Cost}</td>

      </tr>
      {props.Special && <tr>
        <td>Special</td>
        <td>{props.Special}</td>

      </tr>}

    </table>
    {/* <div>
      
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

    </div> */}
  </li>
);

export default Unit;