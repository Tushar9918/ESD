import React,{useEffect, useState} from 'react'

export default function Esd_project() {
    const [users,setUsers]=useState([])
    useEffect(()=> {
        // alert("Hello!")
        fetch('https://tame-blue-haddock-wear.cyclic.app/data')
        .then(response => response.json())
        .then(res =>{
            // console.log(res);
            console.table(res);
            var records=res
            var rows=[];

            // for(let i=0;i<records.length;i++){
            //   rows.push(records[i])
            // }
            setUsers(records);
          })
    })
       
  return (
    <div>
      <table border="1">
        <tr>
          <th>ID</th>
          <th>Full_Name</th>
          <th>Email</th>
          <th>City</th>
          <th>Country</th>
          <th>Zip</th>
          <th>Donation</th>
          <th>Date</th>
          <th>Phone_No</th> 
        </tr>
        {
          users.map((val)=> {
            // console.log(val)
            return(
              <tr>
                <td>{val._id}</td>
                <td>{val.donor_name} {val.donor_last_name}</td>
                <td>{val.email}</td>
                <td>{val.address.city}</td>
                <td>{val.address.country}</td>
                <td>{val.address.zip}</td>
                <td>{val.amount}</td>
                <td>{val.date}</td>
                <td>{val.phone}</td>
              </tr>
            )
          })
        }
      </table>
    </div>
  )
}