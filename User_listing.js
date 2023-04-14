import React,{useEffect, useState} from 'react'

export default function User_listing() {
    const [users,setUsers]=useState([])
    useEffect(()=> {
        // alert("Hello!")
        fetch('https://reqres.in/api/users?page=2')
        .then(response => response.json())
        .then(res =>{
            // console.log(res.data);})
            // console.table(res.data);
            var records=res.data
            var rows=[];

            for(let i=0;i<records.length;i++){
              rows.push(records[i])
            }
            setUsers(records);
          })
    })
        
  return (
    <div>
      <table border="1">
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>name</th>
          <th>avatar</th> 
        </tr>
        {
          users.map((val)=> {
            console.log(val)
            return(
              <tr>
                <td>{val.id}</td>
                <td>{val.email}</td>
                <td>{val.first_name} {val.last_name}</td>
                <td><img src={val.avatar}/></td>
              </tr>
            )
          })
        }
      </table>
    </div>
  )
}
