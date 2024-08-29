import React from 'react';

function TodoItemUpdate({ todo, deleteTodo }) {
  return (
    <li className="py-4 flex items-center justify-between">
      <span className="text-gray-800">{todo.text}</span>
      <button
        onClick={() => deleteTodo(todo._id)}
        className="ml-2 px-2 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
      >
        Update
      </button>
    </li>
  );
}

export default TodoItemUpdate;