import  CreateTodo from './components/CreateTodo.jsx';
import './App.css'
import Todos from './components/Todos.jsx';
import { useEffect, useState } from 'react';


function App() {
   const [todos ,setTodos] = useState([]);

   useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch("http://localhost:3000/todos");
        const json = await res.json();
        setTodos(json.todos);
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    };

    fetchTodos();
  }, []);


  return (
    <div>
      <CreateTodo/>
      <Todos todos ={todos}/>
    </div>
  )
}

export default App;
