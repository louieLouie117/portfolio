import './App.css';


import Projects from './views/Projects';
import {Router} from "@reach/router";
import MainNav from './components/MainNav';
import AboutMe from './views/AboutMe';
import CodeChallenges from './views/CodeChallenges';
import Dashboard from './views/Dashboard';





function App() {

  return (
    <div className="App">
      

      <Router>
        <Projects path="/"/>
        <AboutMe path="/about-me"/>
        <CodeChallenges path="/code-challenges"/>
        <Dashboard path="/dashboard"/>
      </Router>
      <MainNav/>





    </div>
  );
}

export default App;

