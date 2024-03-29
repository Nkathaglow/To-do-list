import './App.css';
import React,{ useState } from "react";

function App() {
  
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addToDo = (todo) => {
    const newToDo = {
      id : Math.random(),
      todo:todo,
    };

    setList([...list, newToDo]);

    setInput("");
  };

  const deleteToDo = (id) => {
    const newList = list.filter((todo) => 
    todo.id !== id);
  
  setList(newList);
  };
  



  return (
    <div>
      <h1>To Do List</h1>
      <input type="text" placeholder="Enter" value={input} onChange = {(e) => setInput(e.target.value)}/>
      <button onClick={() => addToDo(input)}>Add</button>
      <ul>
        {list.map((todo) => {
          return (
          <li key={todo.id}>
            {todo.todo}
            <button onClick = {() => deleteToDo(todo.id)}>&times;</button>
          </li>
        )})}
      </ul>
    </div>
  )
}


export default App;

