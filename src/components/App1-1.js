import React, { useState, useEffect } from 'react';

function App1_1() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('https://final-backend-ubty.onrender.com/api/tasks')
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.log("Error fetching tasks:", err));
  }, []);

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>{task.activity}</li>
        ))}
      </ul>
    </div>
  );
}

export default App1_1;
