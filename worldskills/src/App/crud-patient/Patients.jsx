import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Patients() {
  const [patients,setpatients]=useState([])
  const [role,setrole]=useState([])
  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem('user'))
    const apiUrl = import.meta.env.VITE_API_BASE_URL
    if(user){
      let email=user.email
      axios.get(`${apiUrl}/getRole/${email}`)
      .then(
        (data)=>{
          setrole(data.data.role)
        }
      ).catch((err)=>{
        console.log(err);
      })}
    axios.get(`${apiUrl}/getPatients`)
    .then((data)=>{
      setpatients(data.data.patients)
      console.log(data);
    })
  },[])
  return (
    <div className='container'>
        <center><h1>Gestion des Patients</h1></center>
        <table className='table table-light table-hover table-striped'>
            <thead>
              <tr>
                <th>CIN</th>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Email</th>
                <th>Tel</th>
                <th>Adresse</th>
                <th>Medecin</th>
                {
                  role=="Assistant"&&(
                    <th>Actions</th>
                  )
                }
                
              </tr>
            </thead>
            <tbody>
              {
                !patients?(<div><h1>Aucaun Patient</h1></div>):(<>{
                    patients.map((pat)=>{
                  return (<tr key={pat.id}>
                    <td>{pat.CIN}</td>
                    <td>{pat.Nom}</td>
                    <td>{pat.Prenom}</td>
                    <td>{pat.Email}</td>
                    <td>{pat.Tel}</td>
                    <td>{pat.Adresse}</td>
                    <td>{pat.Medecin}</td>
                    {
                  role=="Assistant"&&(
                  <td><a href={`/editPatient/${pat.idpatient}`} className="btn btn-warning">Edit</a></td>
                  )
                }
                    
                  </tr>)
                })}</>
                )
              }
            </tbody>
        </table>
    </div>
  )
}

export default Patients