import './App.css';
import Header from './component/header/header.jsx'
import Main from './component/main/main.jsx'

function App() {
  return (
    <body className="bg-white text-gray-900">
  <div className="flex flex-col min-h-screen">
        <Header/>
        <Main/>
        </div>
        </body>
  );
}

export default App;
