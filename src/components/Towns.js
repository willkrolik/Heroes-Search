import React from 'react';
import TownList from '../data/towns';
import { Route, NavLink, Redirect } from 'react-router-dom';
import CourseContainer from './spells/CourseContainer';
import UnitContainer from './units/UnitContainer';
// import { HTMLCourses, CSSCourses, JSCourses, } from '../data/courses';
import { CastleUnits } from '../data/units';


const Towns = ({ match }) => {
  let towns = TownList.map((town) => {
    return (
      <li className="teacher" key={town.id} >
        <img className="teacher-img" src={town.img_src} alt="teacher" />
        <h3><NavLink to={`units/${town.name}`}>{town.name}</NavLink></h3>
        <p>{town.bio}</p>

        
        {/* <Route path={`${match.path}/level2`}
          render={() => <CourseContainer data={CSSCourses} />} />
        <Route path={`${match.path}/level3`}
          render={() => <CourseContainer data={JSCourses} />} />
          <Route path={`${match.path}/Castle`}
          render={() => <UnitContainer data={CastleUnits} />} /> */}
      </li>
      
    );
  });

  return (
    <div className="main-content">
      <h2>Towns</h2>
      <ul className="group">
        {towns}
      </ul>
      

    </div>
  );
}

export default Towns;