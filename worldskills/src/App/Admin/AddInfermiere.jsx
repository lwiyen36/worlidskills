import axios from 'axios'
import React, { useEffect, useState } from 'react'
function AddInfermiere() {
    const [donne,setdonne]=useState({
        idEmp:'',idDep:'',Nom:''
    })
    const apiUrl = import.meta.env.VITE_API_BASE_URL

    const [employes,setemployes]=useState('')
    const [departements,setdepartements]=useState('')
    const [success,setsuccess]=useState('')
    function handleSubmit(){
        axios.post(`${apiUrl}/AddInfermier`,{donne}).then((data)=>{
            setsuccess(data.data.message)
        })
    }
    useEffect(()=>{
        axios.get(`${apiUrl}/employes`,{donne}).then((data)=>{
            setemployes(data.data.employes)
        })
        axios.get(`${apiUrl}/departements`,{donne}).then((data)=>{
            setdepartements(data.data.departements)
        })
    },[])
  return (
    <div className='container bg-light rounded-4 p-4 shadow '>
    <h1 className="text-center">Add Infermiere</h1><br/>
    {success&&(
            <div className="bg-success text-light p-2 rounded-2">{success}</div>
        )}
    <form onSubmit={(e)=>{
        e.preventDefault()
        handleSubmit()
    }}>
	
        
            <label htmlFor="">Nom :</label><input name='Nom' required onChange={(e)=>{
            setdonne(prev=> ({...prev,[e.target.name]:e.target.value}))}} type="text" className="form-control" /><br />
            
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
            </select>
            <br />
            <label htmlFor="">Departements :</label>
            <select onChange={(e)=>{
            setdonne(prev=> ({...prev,[e.target.name]:e.target.value}))}} className='form-select' required name="idDep">
                <option value={''}>Select Departement</option>
                {
                    departements&&(
                        departements.map((dep,ind)=>{
                            return (
                                <option key={ind} value={dep.idDep}>{dep.NomDepartement }</option>
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

export default AddInfermiere