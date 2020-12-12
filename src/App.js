import React, { Component } from 'react';
import Header from './components/layout/Header';
import Boilers from './components/Boilers';
import AddBoilers from './components/AddBoiler';
import mockBoilers from './mocks/mockBoilers.json';
import nextId from 'react-id-generator';
import './App.css';

class App extends Component {
  state = {mockBoilers}
  
  markComplete = (id) => {
    this.setState({ mockBoilers: this.state.mockBoilers.map(boil => {
      if(boil.id === id){
        boil.maintaince_completed = !boil.maintaince_completed
      }
      return boil;
    }) })
  }

  // Delete boiler
  delBoiler = (id) => {
    this.setState({ mockBoilers: [...this.state.mockBoilers.filter(boil => boil.id !== id)] });
  }

  //Add Boiler
  addBoiler = ({typeId, maintaince_rate, hour_maintaince_cost, hour_eventual_cost, maintaince_completed}) => {
    const newBoil = {
      number: nextId(),
      typeId,
      maintaince_rate,
      hour_maintaince_cost,
      hour_eventual_cost,
      maintaince_completed
    } 
    this.setState({mockBoilers: [...this.state.mockBoilers, newBoil]})
  }
  
  render (){
    return (
      <div className="App">
        <div className="header">
        <Header />
        </div>
        <div className="container">
          <Boilers boilers={this.state.mockBoilers} markComplete={this.markComplete}
          delBoiler={this.delBoiler} />
          <AddBoilers addBoiler={this.addBoiler} />
        </div>
      </div>
    );
  }
}

export default App;