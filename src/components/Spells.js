import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';

import CourseContainer from './spells/CourseContainer';
import { level1, level2, level3, level4, level5 } from '../data/courses';

const Courses = ({match}) => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Spells</h2> 
      <ul className="course-nav">
        <li className="spell1"><NavLink to={`${match.url}/level1`}> Level 1 </NavLink></li>
        <li className="spell2"><NavLink to={`${match.url}/level2`}> Level 2 </NavLink></li>
        <li className="spell3"><NavLink to={`${match.url}/level3`}>Level 3 </NavLink></li>
        <li className="spell4"><NavLink to={`${match.url}/level4`}>Level 4 </NavLink></li>
        <li className="spell5"><NavLink to={`${match.url}/level5`}>Level 5 </NavLink></li>
      </ul>
    </div>
    
    {/* Write routes here... */}
    <Route exact path={match.path} 
                 render={ () => <Redirect to={`${match.path}/level1`} /> } />
           
    <Route path={`${match.path}/level1`} 
           render={ () => <CourseContainer data={level1} /> } />         
    <Route path={`${match.path}/level2`} 
           render={ () => <CourseContainer data={level2} /> } />     
    <Route path={`${match.path}/level3`} 
           render={ () => <CourseContainer data={level3} /> } />
    <Route path={`${match.path}/level4`} 
           render={ () => <CourseContainer data={level4} /> } />
    <Route path={`${match.path}/level5`} 
           render={ () => <CourseContainer data={level5} /> } />
    
  </div>
);

export default Courses;