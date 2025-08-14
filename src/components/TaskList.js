import { useEffect, useState } from 'react';
import TaskRow from './TaskRow';
import AddTaskForm from './AddTaskForm';

const API_BASE = 'https://final-backend-ubty.onrender.com/api/tasks';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  async function fetchTasks() {
    try {
      const res = await fetch(API_BASE);
      const data = await res.json();
      setTasks(data);
    } catch (err) {
      console.error('Error fetching tasks:', err);
    }
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Tasks</h1>
      <AddTaskForm onAdded={fetchTasks} />
      <ul>
        {tasks.map(task => (
          <TaskRow 
          key={task._id} 
          task={task}
           onUpdated={fetchTasks}  
          onDeleted={fetchTasks}  
        />))}
      </ul>
    </div>
  );
}
