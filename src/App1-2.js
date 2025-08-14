import { useEffect, useState} from 'react';

function App1_2(){
    const[tasks, setTasks] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/api/tasks')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTasks(data);
            })
            .catch(err => console.log(err));
    },[]);
return(
    <div>
        <h1>TASKS</h1>
        <ul>
            {tasks.map(task => (
                <li key = {task._id}>{task.activity}</li>
            ))}
        </ul>
    </div>
)

}

export default App1_2;