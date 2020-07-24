import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// App components
import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Towns';
import Courses from './Spells';
import Creatures from './Creatures';
import AllArtifacts from './AllArtifacts';
import NotFound from './NotFound';
import Featured from './Featured';
import Towns from './Towns';
import Artifacts from './artifacts/Artifacts';
import UnitContainer from './units/UnitContainer';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/units" component={Creatures}/>
        <Route exact path="/towns" component={Towns} />
        {/* <Route  path="/teachers/Castle" component={UnitContainer} /> */}
        <Route path="/creatures/:name" component={Featured} />
        <Route path="/courses" component={Courses} />
        <Route path="/artifacts" component={AllArtifacts} />
        <Route path="/towns/Castle" component={Home} />
        
        <Route component={NotFound} />
        
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;




