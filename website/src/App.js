import logo from './logo.svg';
import './App.css';
import Cohort from './components/Cohort'
import Navibar from './components/Navibar';
import Hero from './components/Hero';
import Information from './components/Information';
import Engage from './components/Engage';
import Team from './components/Team';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Navibar/>
      <Hero/>
      <Information/>
      <Cohort/>
      <Engage/>
      <Team/>
    </div>
  );
}

export default App;
