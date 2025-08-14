import React from 'react';
import './App.css';
import App1_1 from './components/App1-1';
import Navbar from './components/NavBar';

import TaskList from './components/TaskList';


function App() {
  return (
    <div className="App">
      <App1_1 />  {/* render App1-1 inside your main App */}

      <Navbar />
<TaskList />
   
    </div>
  );
}

export default App;
