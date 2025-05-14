import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Nirdosh is learning
        </p>
        <a
          className="App-link"
          href="https://www.ncit.edu.np"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nepal College of Information Technology
        </a>
      </header>
    </div>
  );
}

export default App;
