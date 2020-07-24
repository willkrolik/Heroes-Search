import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';
import UnitContainer from './units/UnitContainer';

// import { HTMLCourses, CSSCourses, JSCourses } from '../data/courses';
import { CastleUnits, RampartUnits, TowerUnits,
    InfernoUnits, NecropolisUnits, DungeonUnits,StrongholdUnits,
    FortressUnits, ConfluxUnits} from '../data/units';

const Featured = ({match}) => {
  let name = match.params.name;
  
  const filteredUnits = [
    ...CastleUnits, 
    ...RampartUnits, 
    ...TowerUnits, 
    ...InfernoUnits, 
    ...NecropolisUnits,
    ...DungeonUnits,
    ...StrongholdUnits,
    ...FortressUnits,
    ...ConfluxUnits
  ].filter(e => e.Name.toLowerCase() === name.toLowerCase())
  return (
    <div className="main-content">
      <h2>{name}</h2>
      {console.log(filteredUnits)}
      {filteredUnits.length ? (<UnitContainer data={filteredUnits} />) : (<span>No results found</span>)}
    
     
    </div>
  );


}

export default Featured;