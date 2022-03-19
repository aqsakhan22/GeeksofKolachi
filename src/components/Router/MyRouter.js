import {
     BrowserRouter as Router,
      Link ,
      Route,
      Switch,
    } 
      
from "react-router-dom";
import Home from "../mainPage/Home";

import ErrorPage from "../mainPage/ErrorPage";
import UserList from "../userList/UserList"
import UserDetails from "../userDetails/UserDetails"
// import UserDetails from "../userDetails/userDetails";
const MyRouter =()=>{
    return(
        <Switch>
            <Route path="/" exact>

                <Home/>
            </Route>
            <Route path="/user-list" >
                <UserList/>

             
            </Route>
            
         <Route path="/user-detail/:i">
               <UserDetails/>

                   </Route>
                   <Route path="/*">
                    <ErrorPage/>

                   </Route>
                   <Route path="/login">
                   {() => <h1>Login</h1>}


                   </Route>
                   
                   <Route path="/register">
                   {()=> <h1>Register</h1>}


                   </Route>
                   

            
        </Switch>
    )

}
export default MyRouter;