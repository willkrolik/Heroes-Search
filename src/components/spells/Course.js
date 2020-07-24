import React from 'react';

const Spell = (props) => (
  <article className="course media group">
    <img className="course-img" src={props.img} alt="spell" />
    <table>
      <tr>
        <th>{props.Name}</th>


      </tr>
      
      <tr>
        <td>Cost</td>
        <td>{props.Cost}</td>

      </tr>
      <tr>
        <td>Duration</td>
        <td>{props.Duration}</td>

      </tr>
      <tr>
        <td>Class</td>
        <td>{props.Class}</td>

      </tr>
      <tr>
        <td>Level</td>
        <td>{props.Level}</td>

      </tr>
      <tr>
        <td>Effect</td>
        <td>{props.Effect}</td>

      </tr>
      <tr>
        <td>Basic Effect</td>
        <td>{props.Basic}</td>

      </tr>

      <tr>
        <td>Advanced Effect</td>
        <td>{props.Advanced}</td>

      </tr>
      <tr>
        <td>Expert Effect</td>
        <td>{props.Expert}</td>

      </tr>
      
      <tr>
        <td>Probability</td>
        <td>{props.Probability}</td>

      </tr>
      {props.Special && <tr>
        <td>Special</td>
        <td>{props.Special}</td>

      </tr>}

    </table>
   
    {/* <div>
      <header>
        <h3>{props.Name}</h3>
        <p>{props.desc}</p>
        <div>
        <p>Cost:{props.Cost}</p>
        <p>Duration:{props.Duration}</p>
        </div>
      </header>
      <div className={props.Class}>
        <p>Class: {props.Class} </p>
        <p>Level:{props.Level}</p>
      </div>
      <p>Effect: {props.Effect}</p>
      <p>Basic Effect: {props.Basic}</p>
      <p>Advanced Effect: {props.Advanced}</p>
      <p>Expert Effect: {props.Expert}</p>
      
      <p>Probability:</p>
      <ul>
        
      </ul>

    </div> */}
  </article>
);

export default Spell;