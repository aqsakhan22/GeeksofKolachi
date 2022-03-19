import React, { useState } from "react";
import { useLocation, useParams,useHistory } from "react-router-dom";

 const UserDetails = (props) => {
    // console.log(props)
     const params = useParams();
     const history=useHistory();
    //  console.log(params)
   const location = useLocation();
   //console.log(location)
   const [userDetail, setUserDetail] = useState(location.state);
   //console.log("userderail:"+userDetail.name)
//   console.log("UserDetails: ", props, location);
  return (
    <div>

        <h1>userDetails</h1>
          <p>id : {userDetail.id}</p>
          <p> Name:{userDetail.name1}</p>
          <button onClick={()=>{history.goBack('/user-list')}}>Go Back</button>
    
      
    </div>
  )
}
export default UserDetails;