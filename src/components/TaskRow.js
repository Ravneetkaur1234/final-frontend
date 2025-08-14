export default function TaskRow({ task, onUpdated, onDeleted }) {
    const handleDelete = async () => {
      if (!window.confirm('Are you sure you want to delete this task?')) return;
      try {
        const res = await fetch(`http://localhost:5000/api/tasks/delete/${task._id}`, {
          method: 'DELETE',
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        onDeleted?.();
      } catch (err) {
        alert('Failed to delete task');
        console.error(err);
      }
    };
  
    const handleEdit = async () => {
      const newActivity = prompt('Edit task:', task.activity);
      if (!newActivity) return;
      try {
        const res = await fetch(`http://localhost:5000/api/tasks/update/${task._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ activity: newActivity }),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        onUpdated?.();
      } catch (err) {
        alert('Failed to edit task');
        console.error(err);
      }
    };
  
    return (
      <li className="task-row">
        <span className="task-text">{task.activity}</span>
        <div className="task-buttons">
          <button className="edit-btn" onClick={handleEdit}>Edit</button>
          <button className="delete-btn" onClick={handleDelete}>Delete</button>
        </div>
      </li>
    );
  }
  