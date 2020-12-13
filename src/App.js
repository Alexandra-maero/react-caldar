import React, { Component } from 'react';
import Header from './components/layout/Header';
import Boilers from './components/Boilers';
import AddBoilers from './components/AddBoiler/AddBoiler';
import mockBoilers from './mocks/mockBoilers.json';
import './App.css';

class App extends Component {
  state = {mockBoilers}

  // Delete boiler
  delBoiler = (id) => {
    this.setState({ mockBoilers: [...this.state.mockBoilers.filter(boil => boil.id !== id)] });
  }

  updateBoiler = (boilUpdated) => {
    this.setState({
      mockBoilers: [...this.state.mockBoilers.map(boil => {
        if(boil.id === boilUpdated.id) {
          boil = boilUpdated;
        }
        return boil;
      })]
    });
  }

  //Add Boiler
  addBoiler = ({typeId, maintaince_rate, hour_maintaince_cost, hour_eventual_cost}) => {
    const newBoil = {
      id: Math.floor(Math.random() * 101),
      typeId,
      maintaince_rate,
      hour_maintaince_cost,
      hour_eventual_cost,
    } 
    this.setState({mockBoilers: [...this.state.mockBoilers, newBoil]})
  }
  
  render (){
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Boilers boilers={this.state.mockBoilers} 
          delBoiler={this.delBoiler} 
          updateBoiler={this.updateBoiler} 
          />
          <AddBoilers addBoiler={this.addBoiler} />
        </div>
      </div>
    );
  }
}

export default App;