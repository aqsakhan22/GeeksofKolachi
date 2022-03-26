import logo from './logo.svg';
import './App.css';
import Allproducts from './components/Allproducts';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Addtocart from './components/Addtocart';
function App() {
  return (
    <div className="App">
      <Allproducts/>
      {/* <Router>
      <Switch>
      <Route path="/addCart" exact component={<Addtocart/>}/>
     
      </Switch>
      </Router> */}


    </div>
  );
}

export default App;
