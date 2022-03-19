import React from 'react'
import { useState } from 'react';
import Listitem from './Listitem';

 const UserList = () => {
    const [list, setList] = useState([
        { id: 0, name1: "hasan" },
        { id: 1, name1: "adnan" },
        { id: 2, name1: "isfhan" },
        { id: 3, name1: "haris" },
        { id: 4, name1: "Abdullah" },
        { id: 5, name1: "Mahnoor" },
      ]);

      const Renderlist=()=>{
        if (!list.length) {
            return "No record Found";
          }

          return list.map((content,index) => (

            <Listitem 
            key={"index"+index}
            content={content}
            />
          ))
      }
  return (
    <div>
        <h1>userList</h1>
       <ul>
       {Renderlist()}
       </ul>
        <p>{list.length} remaining</p>
    </div>
  )
}
export default UserList;