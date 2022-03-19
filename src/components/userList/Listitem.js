import React from 'react'
import { useHistory } from "react-router-dom";

function Listitem(props) {
    const history=useHistory();
    //console.log(props);
  return (
    <div>

           <button 
           onClick={
               ()=>{
                history.push('/user-detail/'+props.content.id, props.content)
               }
           }
           
           >{props.content.name1}</button>
    </div>
  )
}

export default Listitem