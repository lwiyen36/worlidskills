import axios from 'axios'
import React, { useEffect, useState } from 'react'

function MedecinConsultation() {
    const [consultations,setconsultations]=useState([])
    const apiUrl = import.meta.env.VITE_API_BASE_URL

    useEffect(()=>{
        const user=JSON.parse(localStorage.getItem('user'))
        if(user){
      let email=user.email
      axios.get(`${apiUrl}/MedecinConsultation/${email}`)
      .then(
        (data)=>{
          setconsultations(data.data.consultations)
        }
      ).catch((err)=>{
        console.log(err);
      })
    }
    },[])
  return (
    <div className='container'>
        
        {
            consultations.length!=0?(<div>
                <h1 className="text-center">Medecins Consultations</h1>
<table className='table table-hover table-striped table-primary'>
        <thead>
                <tr>
                    <th>NumConsultation</th>
                    <th>idpatient</th>
                    <th>TypeConsultation</th>
                    <th>Objet</th>
                    <th>Observation</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {
                    consultations&&(
                        consultations.map((con,indx)=>{
                            if(con.TypeConsultation=="Consultation")
                            return(<tr key={indx}>
                                <td>{con.idConsultation}</td>
                                <td>{con.idpatient}</td>
                                <td>{con.TypeConsultation}</td>
                                <td>{con.Objet}</td>
                                <td>{con.Observation}</td>
                                <td>{con.Date}</td>
                            </tr>)
                        })
                        
                    )
                }
            </tbody>
        </table>
        <h1 className="text-center">Medecins Operations</h1>
        <table className='table table-hover table-striped table-primary'>
        <thead>
                <tr>
                    <th>NumConsultation</th>
                    <th>idpatient</th>
                    <th>TypeConsultation</th>
                    <th>Objet</th>
                    <th>Observation</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {
                    consultations&&(
                        consultations.map((con,indx)=>{
                            if(con.TypeConsultation=="Operation")
                            return(<tr key={indx}>
                                <td>{con.idConsultation}</td>
                                <td>{con.idpatient}</td>
                                <td>{con.TypeConsultation}</td>
                                <td>{con.Objet}</td>
                                <td>{con.Observation}</td>
                                <td>{con.Date}</td>
                            </tr>)
                        })
                        
                    )
                }
            </tbody>
        </table>
            </div>):(<h1>Aucun Consultation/Operation Pour Ce Medecin</h1>)
        }
        
    </div>
  )
}

export default MedecinConsultation