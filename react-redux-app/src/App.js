import React from 'react';
import './App.css';
// import {reducer} from './reducers/reducer';
import PlayerList from './components/PlayerList';


function App() {
  return (
    <div className="App">
      <header>
      <img className="headimg" src='https://coverfiles.alphacoders.com/555/55583.jpg' /> 
      </header>
      <PlayerList />
    </div>
  );
}

export default App;
