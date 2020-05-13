import React from 'react';
import Spell from './Course';

const CourseContainer = (props) => {
  let spells = props.data.map((spell) => {
    return <Spell Name={spell.Name}
                   Level={spell.Level}
                   Class={spell.Class}
                   Effect={spell.Effect}
                   Basic={spell.Basic}
                   Advanced={spell.Advanced} 
                   Expert={spell.Expert}
                   Cost={spell.Cost}
                   Duration={spell.Duration}
                   Probability={spell.Probability}
                   desc={spell.description}

                   img={spell.img_src}
                   key={spell.id} />
  }); 
  return (
    <div>
      <ul>
        {spells}    
      </ul>
    </div>
  );
}

export default CourseContainer;