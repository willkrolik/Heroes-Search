import React from 'react';
import Artifacts from './Artifacts';

const ArtifactContainer = (props) => {
  let artifacts = props.data.map((artifact) => {
    return <Artifacts Name={artifact.Artifact}
                   Slot={artifact.Slot}
                   Class={artifact.Class}
                   Cost={artifact.Cost}
                   Effect={artifact.Effect}
                   Combination={artifact.Combination} 
                    />
  }); 
  return (
    <div>
    
        {artifacts}    
     
    </div>
  );
}

export default ArtifactContainer;