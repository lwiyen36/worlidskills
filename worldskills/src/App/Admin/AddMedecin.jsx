import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AddMedecin() {
    const [donne,setdonne]=useState({
        Matricule:'',Service:'',Specialite:'',Tarif:'',
        idEmp:0
    })
    const apiUrl = import.meta.env.VITE_API_BASE_URL

    const [employes,setemployes]=useState('')
    const [success,setsuccess]=useState('')
    function handleSubmit(){
        axios.post(`${apiUrl}/AddMedecin`,{donne}).then((data)=>{
            setsuccess(data.data.message)
        })
    }
    useEffect(()=>{
        axios.get(`${apiUrl}/employes`,{donne}).then((data)=>{
            setemployes(data.data.employes)
        })
    },[])
  return (
    <div className='container'>
    <h1 className="text-center">Add Medecin</h1><br/>
    {success&&(
            <div className="bg-success text-light p-2 rounded-2">{success}</div>
        )}
    <form onSubmit={(e)=>{
        e.preventDefault()
        handleSubmit()
    }}>
	
        <label htmlFor="">Matricule :</label>
        <input required onChange={(e)=>{
            setdonne(prev=> ({...prev,[e.target.name]:e.target.value}))}} type="text" name='Matricule' className="form-control" /><br />

            <label htmlFor="">Service :</label><input name='Service' required onChange={(e)=>{
            setdonne(prev=> ({...prev,[e.target.name]:e.target.value}))}} type="text" className="form-control" /><br />

            <label htmlFor="">Specialite :</label><input name='Specialite' required onChange={(e)=>{
            setdonne(prev=> ({...prev,[e.target.name]:e.target.value}))}} type="text" className="form-control" /><br />

            <label htmlFor="">Tarif :</label><input name='Tarif' required onChange={(e)=>{
            setdonne(prev=> ({...prev,[e.target.name]:e.target.value}))}} type="number" className="form-control" /><br />
            
            <label htmlFor="">Employes :</label>
            <select onChange={(e)=>{
            setdonne(prev=> ({...prev,[e.target.name]:e.target.value}))}} className='form-select' required name="idEmp">
                <option value={''}>Select Employer</option>
                {
                    employes&&(
                        employes.map((emp,ind)=>{
                            return (
                                <option key={ind} value={emp.idEmp}>{emp.Nom}</option>
                            )
                        })
                    )
                }
            </select><br />

        <button className='btn btn-primary'>Ajouter</button>
    </form>

</div>
  )
}

export default AddMedecin