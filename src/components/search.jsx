import '../App.css';
import { useState } from 'react';
function Search({ todo, setTodo }) {
  const [search, setSearch] = useState("");
  const Delete = (itemToDelete) => {
    setTodo(todo.filter(item => item !== itemToDelete));
  };
  return (
    <>
      <input class=' bg-slate-400 placeholder:text-black font-sans font-normal ml-36 mr-36 mb-8  text-sm px-3 py-2.5 rounded-[7px] focus:bg-blue-300' placeholder="Search..." onChange={(event) => setSearch(event.target.value)}/>
      <ul>
        {todo.filter((item) => item.toLowerCase().includes(search.toLowerCase())).map((item, index) => (
            <li key={index} className="flex items-center justify-between border-b border-gray-300 pb-2">
              {item}
              <div>
                <button className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600" onClick={() => Delete(item)}>Delete</button>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}

export default Search;