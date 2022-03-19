// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Link } from "react-router-dom";
import MyRouter from "../Router/MyRouter";



function App() {
  return (
       <Router>
         <div className="App">
          
             <nav>
               <ul>
                <li><Link to="/">Home</Link></li>
               </ul>
               <ul>
                <li><Link to="/user-list">Users List</Link></li>
               </ul>
               <ul>
                <li><Link to="/login">Login</Link></li>
               </ul>
               <ul>
                <li><Link to="/register">Register</Link></li>
               </ul>
             </nav>
             
           
             <MyRouter/>
           

         </div>
         
       </Router>
       
  );
}

export default App;
