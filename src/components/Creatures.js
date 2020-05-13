import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';
import UnitContainer from './units/UnitContainer';
import CourseContainer from './spells/CourseContainer';
// import { HTMLCourses, CSSCourses, JSCourses } from '../data/courses';
import { CastleUnits, RampartUnits, TowerUnits,
    InfernoUnits, NecropolisUnits, DungeonUnits,StrongholdUnits,
    FortressUnits, ConfluxUnits} from '../data/units';

const Creatures = ({ match }) => (
    <div className="main-content courses">
        <div className="course-header group">
            <h2>Creatures</h2>
            <ul className="course-nav">
                <li><NavLink to={`${match.url}/Castle`}>Castle</NavLink></li>
                <li><NavLink to={`${match.url}/Rampart`}>Rampart</NavLink></li>
                <li><NavLink to={`${match.url}/Tower`}>Tower</NavLink></li>
                <li><NavLink to={`${match.url}/Inferno`}>Inferno</NavLink></li>
                <li><NavLink to={`${match.url}/Necropolis`}>Necropolis</NavLink></li>
                <li><NavLink to={`${match.url}/Dungeon`}>Dungeon</NavLink></li>
                <li><NavLink to={`${match.url}/Stronghold`}>Stronghold</NavLink></li>
                <li><NavLink to={`${match.url}/Fortress`}>Fortress</NavLink></li>
                <li><NavLink to={`${match.url}/Conflux`}>Conflux</NavLink></li>
            </ul>
        </div>

        {/* Write routes here... */}
        <Route exact path={match.path}
            render={() => <Redirect to={`${match.path}/Castle`} />} />

         <Route path={`${match.path}/Castle`}
            render={() => <UnitContainer data={CastleUnits} />} />
            <Route path={`${match.path}/Rampart`}
            render={() => <UnitContainer data={RampartUnits} />} />
            <Route path={`${match.path}/Tower`}
            render={() => <UnitContainer data={TowerUnits} />} />
            <Route path={`${match.path}/Inferno`}
            render={() => <UnitContainer data={InfernoUnits} />} />
            <Route path={`${match.path}/Necropolis`}
            render={() => <UnitContainer data={NecropolisUnits} />} />
            <Route path={`${match.path}/Dungeon`}
            render={() => <UnitContainer data={DungeonUnits} />} />
            <Route path={`${match.path}/Stronghold`}
            render={() => <UnitContainer data={StrongholdUnits} />} />
            <Route path={`${match.path}/Fortress`}
            render={() => <UnitContainer data={FortressUnits} />} />
            <Route path={`${match.path}/Conflux`}
            render={() => <UnitContainer data={ConfluxUnits} />} />
       

    </div>
);

export default Creatures;