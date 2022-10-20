import { useState } from 'react';

let nextId = 0;
//title is the value of my input entry
export default function Input(props) {
  const [title, setTitle] = useState(''); //used to set the actual toDo title
  const [todos, setTodos] = useState([]); //used to set the todo list
  
  return (
    <div>
      <h1>To-Do List</h1>
      <div className="input-group mb-3">
        <input
          className="form-control"
          type="text"
          placeholder="Enter To-do..." 
          value={title} //feeds into useState to set individual todo title
          onChange={e => setTitle(e.target.value)} //once changed and button clicked, todo recorded
          />
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={() => {
            setTitle('');
            setTodos([
            ...todos, //old items are retained with each addition, spread op
            { id: nextId++, title: title } //increment ID with each addition
          ]);
        }}>Enter</button>
      </div>
      <div>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>{todo.title}
            <button
              className="btn btn-success"
              type="button"
              onClick={() => {
                console.log(todos);
                const nextTodos = [...todos];
                nextTodos.splice(todos.indexOf(todo), 1);
                setTodos(nextTodos);
            }}>
              Remove
            </button>  
            </li>
          ))}
        </ul>
      </div>
      <div>
      </div>
    </div>
  );
}
