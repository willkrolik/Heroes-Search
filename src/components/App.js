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
import Teachers from './Teachers';
import Courses from './Spells';
import Creatures from './Creatures';
import NotFound from './NotFound';
import Featured from './Featured';
import Towns from './Towns';
import UnitContainer from './units/UnitContainer';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/units" component={Creatures}/>
        <Route  path="/teachers" component={Teachers} />
        {/* <Route  path="/teachers/Castle" component={UnitContainer} /> */}
        <Route path="/teachers/:topic/:fname-:lname" component={Featured} />
        <Route path="/courses" component={Courses} />
        <Route path="/towns" component={Towns} />
        <Route path="/teachers/Castle" component={Creatures} />
        
        <Route component={NotFound} />
        
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;




