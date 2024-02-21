import React from "react";
import { useState, useEffect } from "react";
import './App.css';
import AddForm from "./components/AddForm";
import Header from "./components/Header";
import StatusBar from "./components/StatusBar";
import ToDoList from "./components/ToDoList";
import Trash from "./components/Trash";

const App = () => {
  const [todos, setTodos] = useState([])
  const [todoText, setTodoText] = useState('')
  const [status, setStatus] = useState('all')
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todos')))
  }, [])
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div className="App">
      <div className="container">
        <Header todos={todos}/>
        <StatusBar setStatus={setStatus} status={status} searchText={searchText} setSearchText={setSearchText}/>
        <ToDoList todos={todos} setTodos={setTodos} status={status} searchText={searchText}/>
        <AddForm setTodos={setTodos} setTodoText={setTodoText} todoText={todoText}/>
        <Trash setStatus={setStatus} status={status}/>
      </div>
    </div>
  )
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <div className="container">
//         <h1>To Do List</h1>
//         <div>
//           <span>0 more</span>
//           <span>1 more</span>
//         </div>
//         <div>
//           <div>
//             <button type="button">All</button>
//             <button type="button">Active</button>
//             <button type="button">Done</button>
//           </div>
//           <input type="text" placeholder="search" />
//           <ul>
//             <li>
//               <span></span>
//               <div>
//                 <button type="button">Done</button>
//                 <button type="button">Edit</button>
//                 <button type="button">Delete</button>
//               </div>
//             </li>
//           </ul>
//           <form action="">
//             <input type="text" />
//             <button type="submit">add</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
