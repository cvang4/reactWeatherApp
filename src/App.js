import React from 'react';
import moment from 'moment';
import './App.css';
import Forecast from './components/Forecast';

function App() {
  return (

    <div className="App">
      <main>
        <h1>Weather in Aincrad</h1>
        <p>{moment().format('h:mm a')}</p>
        <p>{moment().format('dddd')}, {moment().format('LL')}</p>

        <br/>
        <br/>

        <Forecast />
      </main>
    </div>
  );
}

export default App;
