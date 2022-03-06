import react from 'react'
import { Link } from 'react-router-dom';
const Home =()=>{
return(
    <div>
        <h1>Home</h1>
        <nav>
            <ul>
                <li>
                   <Link to="/about"> About Us</Link>
                    
                    </li>
                <li>
                  <Link to="/contactus">  Contact Us</Link>
                    
                    </li>

                    
            </ul>
        </nav>
    </div>
)
}
export default Home;