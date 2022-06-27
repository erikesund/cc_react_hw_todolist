import './App.css';
import React, {useState} from 'react';

function App() {

  const [tasks, setTasks] = useState([
  "Buy shopping", 
  "Clean bathroom", 
  "Car's MOT"
]);

  const [newTask, setNewTask] = useState("");

  const taskNodes = tasks.map((task) => {
    return (
      <li>
        <span>{task}</span>
      </li>
  )
});

  const handleTaskInput = (evt) => {
    setNewTask(evt.target.value);
  };

  const saveNewTask = (evt) => {
    evt.preventDefault();
    const copyTasks = [...tasks];
    copyTasks.push(newTask);
    setTasks(copyTasks);
    setNewTask("");
  }

  return (
    <div className="App">
      <h1>ToDo's</h1>
      <hr></hr>

      <form onSubmit={saveNewTask}>
        <input id="new-task" type="text" value={newTask} onChange={handleTaskInput}/>
        <label htmlFor='new-task'/>
        <input type="submit" value="Save Item"/>
      </form>

      <ul>
        {taskNodes}
      </ul>

    </div>
  );
}

export default App;
