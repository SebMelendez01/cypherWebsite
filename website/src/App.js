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
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
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
