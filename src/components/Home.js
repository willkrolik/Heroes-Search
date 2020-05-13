import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {    
  
  render() {
    return (
      <div className="main-content home">
        <h2>Heroes of Might and Magic III!</h2>
        <p>Most direct source for Heroes 3 information</p>
        <p>Check out all the dfactions (towns) and spells</p>
        <p>Search function to come!</p>
        <hr />
        <h3>Featured Teachers</h3>
        <Link to="teachers/HTML/Tommy-Wingo">Tommy Wingo</Link>
      </div>
    );
  }
}

export default Home;