import axios from 'axios'
import React, { useEffect, useState } from 'react'

function RechercheConsultation() {
    const [medecins,setmedecin]=useState([])
    const [donne,setdonne]=useState({
        DateDebut:'',Medecin:'',patient:'',DateFin:''
    })
    const apiUrl = import.meta.env.VITE_API_BASE_URL
    
    const [patients,setpatients]=useState([])
    const [consultations,setresult]=useState([])
    useEffect(()=>{
        axios.get(`${apiUrl}/getPatients`)
        .then((data)=>{
          setpatients(data.data.patients)
        })
       axios.get(`${apiUrl}/getMedecins`)
       .then((data)=>{
         setmedecin(data.data.medecins)
       })
   },[])
   function handlesubmit(){
    axios.post(`${apiUrl}/RechercheConsultation`,{donne})
        .then((data)=>{
            setresult(data.data.consultations)
        })
    }
  return (
    <div className='container shadow p-4 rounded-2 bg-light'>
        <h1 className="text-center">Recherche de consultations</h1><br/>
        <form onSubmit={(e)=>{
            e.preventDefault()
            handlesubmit()
        }}>
            <label for="">Date début:</label><input type='date' onChange={(e)=>{
                setdonne({...donne,[e.target.name]:e.target.value})
            }} name='DateDebut' className='form-control'/> <br />
            <label for="">Date Fin:</label><input type='date' onChange={(e)=>{
                setdonne({...donne,[e.target.name]:e.target.value})
            }} name='DateFin' className='form-control'/> <br />
            <label htmlFor="">Medecin:</label>
            <select onChange={(e)=>{
                setdonne({...donne,[e.target.name]:e.target.value})
            }} className='form-select' name="Medecin">
                <option value="">Choisir Medecin</option>
                {
    medecins?.map((med,indx) => {
        return(
            <option
        key={indx}
        value={med.Matricule}
      >
        {med.Matricule}
      </option>
        )
    }
    )
}
</select><br />
            <label for="">Patients :</label>
            <select onChange={(e)=>{
                setdonne({...donne,[e.target.name]:e.target.value})
            }} className='form-select' name="patient">
                <option value="">Choisir Patient</option>
                {
                    patients?.map((med,indx) => {
                        return(
                            <option
                        key={indx}
                        value={med.idpatient}
                    >
                        {med.Nom}
                    </option>)})}
                        </select>
             <br />
             <button className='btn btn-primary'>
                Recherche
             </button>
        </form>
        {
            consultations.length!=0&&(
        <table className='table table-hover table-primary table-striped'>
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
            )
        }
    </div>
  )
}

export default RechercheConsultation