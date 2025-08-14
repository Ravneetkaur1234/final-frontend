import { useEffect, useState } from 'react';

const BACKEND_URL = 'https://final-backend-ubty.onrender.com'; // your deployed backend

function App1_2() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Fetch tasks from backend
  useEffect(() => {
    fetch(`${BACKEND_URL}/api/tasks`)
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error('Error fetching tasks:', err));
  }, []);

  // Add a new task
  const addTask = () => {
    if (!newTask) return;

    fetch(`${BACKEND_URL}/api/tasks/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ activity: newTask }),
    })
      .then(res => res.json())
      .then(msg => {
        console.log(msg);
        setTasks(prev => [...prev, { activity: newTask, _id: Date.now() }]);
        setNewTask('');
      })
      .catch(err => console.error('Error adding task:', err));
  };

  return (
    <div>
      <h1>Tasks</h1>
      <input
        type="text"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
        placeholder="New task..."
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map(task => (
          <li key={task._id}>{task.activity}</li>
        ))}
      </ul>
    </div>
  );
}

export default App1_2;
