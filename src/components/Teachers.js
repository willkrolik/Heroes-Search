import React from 'react';
import TeacherList from '../data/teachers';
import { Route, NavLink, Redirect } from 'react-router-dom';
import CourseContainer from './spells/CourseContainer';
import UnitContainer from './units/UnitContainer';
// import { HTMLCourses, CSSCourses, JSCourses, } from '../data/courses';
import { CastleUnits } from '../data/units';


const Teachers = ({ match }) => {
  let teachers = TeacherList.map((teacher) => {
    return (
      <li className="teacher" key={teacher.id} >
        <img className="teacher-img" src={teacher.img_src} alt="teacher" />
        <h3><NavLink to={`${match.url}/${teacher.name}`}>{teacher.name}</NavLink></h3>
        <p>{teacher.bio}</p>

        
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
        {teachers}
      </ul>
      

    </div>
  );
}

export default Teachers;