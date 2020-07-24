import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';
import UnitContainer from './units/UnitContainer';
import CourseContainer from './spells/CourseContainer';
import ArtifactContainer from './artifacts/ArtifactContainer';
// import { HTMLCourses, CSSCourses, JSCourses } from '../data/courses';
import { CastleUnits, RampartUnits, TowerUnits,
    InfernoUnits, NecropolisUnits, DungeonUnits,StrongholdUnits,
    FortressUnits, ConfluxUnits} from '../data/units';

import { artifacts} from '../data/artifacts';

const Creatures = ({ match }) => (
    <div className="main-content courses">
        
        {/* Write routes here... */}
        <Route exact path={match.path}
            render={() => <Redirect to={`${match.path}`} />} />

         <Route path={`${match.path}`}
            render={() => <ArtifactContainer data={artifacts} />} />
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