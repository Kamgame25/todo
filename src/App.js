import './App.css';
import { useState } from 'react';
import Search from './components/search';
import Add from './components/add';

function App() {
  const initialTodos = ["Task 1", "Task 2", "Task 3"];

  const [todo, setTodo] = useState(initialTodos);

  return (
    <>
      <body class="flex-grow p-4 w-1/2 self-center">
        <div id="todobg" class="bg-gray-100 rounded-lg shadow-md p-4 w-full">
          <div id="todolist" class="space-y-8">
            <div id="addcontent">
              <Add todo={todo} setTodo={setTodo} />
            </div>
            
            <div id="search">
              <Search todo={todo} setTodo={setTodo} />
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
export default App;
