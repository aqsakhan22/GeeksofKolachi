import logo from './logo.svg';
import './App.css';
import Home from './RouterExample/Home';
import {BrowserRouter as Router} from 'react-router-dom'
import { Switch,Route } from 'react-router-dom';
import About from './RouterExample/About';
import Contact from './RouterExample/ContactUs';
import ErrorPage from './RouterExample/ErrorPaeg';

function App() {
  return (
   <Router>
      <div className="App">
      <Switch>
        <Route path="/" exact>
        
          <Home/>
          </Route>

          <Route path="/about">
            <About/>
            
            </Route>
            <Route path="/contactus">
            <Contact/>
            
            </Route>


            <Route path="*">
        <ErrorPage/>
            </Route>
      </Switch>
       
    </div>
   </Router>
  );
}

export default App;
