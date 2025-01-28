import './App.css';
import SecondsCounter from './components/SecondsCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SecondsCounter initialSeconds={0} />
      </header>
    </div>
  );
}

export default App;
