import React, { useState } from 'react';


export default function AddTaskForm({onAdded}){

    //activity → what the user typed in the input box.
//loading → shows a spinner/disable button while request is in progress.
//error → holds an error message if something fails.

    const[activity, setActivity]= useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
//Stop page refresh (default form behavior).
//We're handling submission with JavaScript instead.

    async function handleSubmit(e) {
        e.preventDefault();

      //Trim extra spaces. If empty, stop — no empty tasks.
        const text = activity.trim();
if (!text) return;

setLoading(true);
setError('');

try {
    const res = await fetch(`http://localhost:5000/api/tasks/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ activity: text }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    setActivity('');
    onAdded?.(); // ask TaskList to refresh
  } catch (err) {
    setError('Failed to add task. Check server.');
  } finally {
    setLoading(false);
  }

}
return (
    <section id="add" className="card">
      <h2>Add a Task</h2>
      <form onSubmit={handleSubmit} className="add-form">
        <input
          type="text"
          placeholder="What do you need to do?"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Adding…' : 'Add Task'}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
    </section>
  );
}

