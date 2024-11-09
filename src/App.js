import logo from './logo.svg';
import './App.css';
import Component1 from './Component1.js';
import Component011 from './Component011.js';
import Hello from './components/Hello.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          20241028 react oss class
        </p>
        <Hello />
        <Component1 />
        <Component011 />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
