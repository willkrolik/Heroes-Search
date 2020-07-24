import React, { Component } from 'react';


class Home extends Component {  
  
  handleSubmit = (e) => {
    e.preventDefault();
    let creatureName = this.name.value;
   
    let path = `creatures/${creatureName}`;
    this.props.history.push(path);
  }
  
  render() {
    return (
      <div className="main-content home">
        <h2>Heroes of Might and Magic III!</h2>
        <p>Most direct source for Heroes 3 information</p>
        <p>Check out all the factions (towns) and spells</p>
        <p>Search function to come!</p>
        <hr />
        <h3>Creature Finder</h3>
        <form onSubmit={this.handleSubmit}>
  <input type="text" placeholder="Creature" ref={ (input) => this.name = input }/>
 
  <button type="submit">Go!</button>
        </form>
      </div>
    );
  }
}

export default Home;