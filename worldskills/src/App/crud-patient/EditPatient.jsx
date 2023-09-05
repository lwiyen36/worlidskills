import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
function EditPatient() {
    const [medecins,setmedecin]=useState([])
    const[patient, setpatient] = useState({})
    const apiUrl = import.meta.env.VITE_API_BASE_URL
    const {id}=useParams()
    useEffect(()=>{
         axios.get(`${apiUrl}/getPatient/${id}`)
        .then((data)=>{
          setpatient(data.data.patient[0])
        })
        axios.get(`${apiUrl}/getMedecins`)
        .then((data)=>{
          setmedecin(data.data.medecins)
        })
    },[])
    const navigate=useNavigate()
    function handleSubmit(){
        axios.put(`${apiUrl}/EditPatient/${id}`,{patient:patient})
        .then((data)=>{
            navigate('/getPatients')
        }).catch((err)=>{
            console.log(err);
        })
    }
  return (
    <div className='container'>
        <h1>Edit Patient</h1><br/>
        <form onSubmit={(e)=>{
                e.preventDefault()
                handleSubmit();
            }} method="post">
            <label htmlFor="">CIN:</label>
            <input type="text" value={patient.CIN} className="form-control" name='CIN' onChange={(e)=>{
                setpatient({...patient,[e.target.name]:e.target.value})
            }} required /><br />
            <label htmlFor="">Nom:</label>
            <input type="text" onChange={(e)=>{
                setpatient({...patient,[e.target.name]:e.target.value})
            }}  value={patient.Nom} className="form-control" name='Nom' required /><br />
            <label htmlFor="">Prenom:</label>
            <input type="text" onChange={(e)=>{
                setpatient({...patient,[e.target.name]:e.target.value})
            }} value={patient.Prenom} className="form-control" name='Prenom' required /><br />
            <label htmlFor="">Email:</label>
            <input type="email" onChange={(e)=>{
                setpatient({...patient,[e.target.name]:e.target.value})
            }} value={patient.Email} className="form-control" name='Email' required /><br />
            <label htmlFor="">Tel:</label>
            <input type="number" onChange={(e)=>{
                setpatient({...patient,[e.target.name]:e.target.value})
            }} value={patient.Tel} className="form-control" name='Tel' required /><br />
            <label htmlFor="">Adresse:</label>
            <input  type="text" onChange={(e)=>{
                setpatient({...patient,[e.target.name]:e.target.value})
            }} value={patient.Adresse} className="form-control" name='Adresse' required /><br />
            <label htmlFor="">Medecin:</label>
            <select onChange={(e)=>{
                setpatient({...patient,[e.target.name]:e.target.value})
            }} className='form-select' name="Medecin">{
    medecins?.map((med,indx) => {
        return(
            <option
        key={indx}
        value={med.Matricule}
        selected={med.Matricule === patient.Medecin}
      >
        {med.Matricule}
      </option>
        )
        
    }
      
    )
}
</select>
            
            <button  className='btn btn-primary'>
                Editer
            </button>

        </form>
    </div>
  )
}

export default EditPatient