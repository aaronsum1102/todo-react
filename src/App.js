import React from 'react';
import './App.css';
import fontAwesomeConfig from "./font-awesome-config"
import TodoViewContainer from "./containers/TodoViewContainer"

fontAwesomeConfig()

function App() {
  return (
    <div className="App">
      <TodoViewContainer />
    </div>
  );
}

export default App;