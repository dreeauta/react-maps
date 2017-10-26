import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/map';
import Places from './components/places';

class App extends Component {
  render() {
    const location = {
      lat: 0,
      lng: 0
    }
    
    return (
      <div className="App">
        This is the component!
          <div style={{width: 300, height: 600, background:'lightblue'}}> 
            <Map/>
          </div>
        <Places/>
      </div>
    );
  }
}

export default App;
