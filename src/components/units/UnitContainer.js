import React from 'react';
import Unit from './Unit';

const UnitContainer = (props) => {
    let units = props.data.map((unit) => {
        return <Unit Name={unit.Name}
            Town={unit.Town}
            Level={unit.Level}
            Attack={unit.Attack}
            Defense={unit.Defense}
            Damage={unit.Damage}
            Health={unit.Health}
            Speed={unit.Speed}
            Flying={unit.Flying}
            Archer={unit.Archer}
            Shots={unit.Shots}
            Size={unit.Size}
            Growth={unit.Growth}
            Upgraded={unit.Upgraded}
            Cost={unit.Cost}
            Special={unit.Special}
            img={unit.img_src}
        />
    });
    return (
        <div>
            <ul>
                {units}
            </ul>
        </div>
    );
}

export default UnitContainer;