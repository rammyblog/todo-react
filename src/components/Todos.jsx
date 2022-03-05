import React from 'react';

const Todos = ({ todoObject }) => {
  // {
  //     id: 1,
  //     title: 'Learn React',
  // }
  return (
    <ul>
      {todoObject.todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default Todos;
