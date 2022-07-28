import './App.css';
import Navibar from './components/Navibar';
import Hero from './components/Hero';
import Information from './components/Information';
import Engage from './components/Engage';
import Team from './components/Team';
import Cohort from './components/Cohort';
import Footer from './components/Footer';
import Partners from './components/Partners';

import "bootstrap/dist/css/bootstrap.min.css"
import './components/Component.css';

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
      <Partners/>
      <Footer/>
    </div>
  );
}

export default App;
