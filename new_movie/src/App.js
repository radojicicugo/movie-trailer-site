
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import Contact from './Contact';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <NavBar />
     <Router>
         <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path="/contact" component={Contact} />
         </Switch>
     </Router>
    </div>
  );
}

export default App;
