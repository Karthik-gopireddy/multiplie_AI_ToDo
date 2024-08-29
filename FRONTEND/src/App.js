import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


function App() {
  const [todos, setTodos] = useState([]);
  

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await axios.get('http://localhost:5000/todos');
    setTodos(response.data);
  };

  const addTodo = async (text) => {
    await axios.post('http://localhost:5000/todos', { text });
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/todos/${id}`);
    fetchTodos();
  };

  return (
    <div className="bg-yellow-100 h-screen  py-6 flex flex-col justify-center sm:py-12">
      <div className=" relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0  from-cyan-400 to-light-blue-500 transform "></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold text-center mb-6">Multiplier AI To-Do Application</h1>
            </div>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} />
         
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
