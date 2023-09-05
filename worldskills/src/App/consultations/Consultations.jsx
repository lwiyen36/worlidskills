import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Consultations() {
    const [role,setrole]=useState([])
    const [consultations,setconsultations]=useState([])
    const apiUrl = import.meta.env.VITE_API_BASE_URL
    useEffect(()=>{
        const user=JSON.parse(localStorage.getItem('user'))
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
        axios.get(`${apiUrl}/consultations`)
        .then((data)=>{
            setconsultations(data.data.consultations)
        })
    },[])
  return (
    <div className='container'>
        <center><h1>Consultations</h1></center>
        <table className='table table-striped table-hover table-light'>
            <thead>
                <tr>
                    <th>NumConsultation</th>
                    <th>idpatient</th>
                    <th>TypeConsultation</th>
                    <th>Objet</th>
                    <th>Observation</th>
                    <th>Date</th>
                    {
                  role=="Infermiere"&&(
                    <th>Attacher</th>
                  )
                }
                </tr>
            </thead>
            <tbody>
                {
                    consultations&&(
                        consultations.map((con,indx)=>{
                            return(<tr key={indx}>
                                <td>{con.idConsultation}</td>
                                <td>{con.idpatient}</td>
                                <td>{con.TypeConsultation}</td>
                                <td>{con.Objet}</td>
                                <td>{con.Observation}</td>
                                <td>{con.Date}</td>
                                {
                  role=="Infermiere"&&(
                   <td>
                                    <a className='btn btn-primary' href={`/consultationFiles/${con.idConsultation}/${con.TypeConsultation}`} >Attacher</a>
                                </td>
                  )
                }
                                
                            </tr>)
                        })
                        
                    )
                }
            </tbody>
        </table>
    </div>

  )
}

export default Consultations