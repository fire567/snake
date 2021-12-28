import React from 'react';
import './App.css';
import GamePage from './Components/GamePage/GamePage';
import MainPage from './Components/MainPage/MainPage';
import { HashRouter, Route, Switch} from 'react-router-dom';


function App() {

  console.log(window.location)

  return (
      <div className="App">
        <HashRouter>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/game" component={GamePage} />
        </HashRouter>
      </div>
  );
}

export default App;
