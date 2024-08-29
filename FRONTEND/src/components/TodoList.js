import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, deleteTodo }) {
  return (
    <ul className="divide-y divide-gray-200">
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
}

export default TodoList;