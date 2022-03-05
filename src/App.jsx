import { useState } from 'react';
import TodoInput from './components/TodoInput';
import Todos from './components/Todos';

function App() {
  const [todoObject, setTodoObject] = useState({
    todos: [],
  });
  return (
    <>
      <h3>Todo</h3>
      <Todos todoObject={todoObject} />
      <TodoInput todoObject={todoObject} setTodoObject={setTodoObject} />
    </>
  );
}

export default App;
