import logo from './logo.svg';
import './app.css';
import Navbar from './components/header.js';

function App() {
  return (
    <div className="App bg-white sm:px-10 max-w-7xl mx-auto">
      <header className="App-header">
        <Navbar/>
      </header>
    </div>
  );
}

export default App;
