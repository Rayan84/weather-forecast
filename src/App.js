import './App.css';
import './index.css';
import Nav from './components/Nav';
import img from './logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="top-section-container">
          <div className="display-flex position-fixed">
            <img className="logo" src={img} alt="logo" />
            <h1 className="text-align-center">Weather Forcast</h1>
          </div>
        </div>

        <Nav />
      </header>
    </div>
  );
}

export default App;
