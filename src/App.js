import React from 'react';
import './App.css';
import fontAwesomeConfig from "./font-awesome-config"
import TodoView from "./components/views/TodoView"

fontAwesomeConfig()

function App() {
  return (
    <div className="App">
      <TodoView />
    </div>
  );
}

export default App;