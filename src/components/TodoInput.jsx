import React, { useState } from 'react';

const TodoInput = (props) => {
  const [title, setTitle] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setTodoObject({
      todos: [
        ...props.todoObject.todos,
        { id: props.todoObject.todos.length + 1, title },
      ],
    });
  };
  return (
    <form>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Enter your todo"
      />
      <button onClick={(e) => handleSubmit(e)} type="submit">
        Add #{props.todoObject.todos.length + 1}
      </button>
    </form>
  );
};

export default TodoInput;
