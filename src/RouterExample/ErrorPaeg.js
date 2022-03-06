import react from 'react'
import { useHistory } from 'react-router-dom';

const ErrorPage=()=>{
    const history=useHistory();
    const back=()=>{
        console.log("Go Back");
       // history.goBack();
       history.push("/");
    

    }
return(
    <div>
        <h1>Error Page</h1>
        <button onClick={()=>back()}>Back to home</button>
      
    </div>
)
}
export default ErrorPage;