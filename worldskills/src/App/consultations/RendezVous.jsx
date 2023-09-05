import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function RendezVous() {
    const [patients,setpatients]=useState([])
    const [consultation,setconsultation]=useState({
        idpatient:0,TypeConsultation:'',Objet:'',Observation:'',Date:''
    })
    const apiUrl = import.meta.env.VITE_API_BASE_URL

    const navigate=useNavigate()
    useEffect(()=>{
        axios.get(`${apiUrl}/getPatients`)
    .then((data)=>{
      setpatients(data.data.patients)
    })
    },[])
    function confirmer(){
        axios.post(`${apiUrl}/RendezVous/`,{...consultation})
        .then((data)=>{
            navigate('/getPatients')
        }).catch((err)=>{
            alert(err?.message)
        })
    }
  return (
    <div className='container'>
         <center><h1>Rendez-Vous Pour Un Patient</h1></center>
         <form onSubmit={(e)=>{
            e.preventDefault()
            confirmer()
         }}>
            <label htmlFor="">Patient</label>
            <select required onChange={(e)=>{
            setconsultation({...consultation,[e.target.name]: e.target.value})}}  name="idpatient" id="" className="form-select">
                <option value="" selected>Choisir patient</option>
                {
                    patients&&(
                            patients?.map((pat,indx)=>{
                                return(
                                    <option  key={indx} value={pat.idpatient}>{pat.Nom}</option>
                                )
                            })
                    )
                }
            </select><br />
            <label htmlFor="">Type de Consultation :</label>
           <select required onChange={(e)=>{
            setconsultation({...consultation,[e.target.name]: e.target.value})}} name="TypeConsultation" className='form-select' id="">
                <option value="" selected>Choisir Type</option>
            <option value="Consultation">Consultation General</option>
            <option value="Operation">Operation</option></select><br />
            <label htmlFor="">Objet :</label>
            <input required onChange={(e)=>{
            setconsultation({...consultation,[e.target.name]: e.target.value})}}  type="text" className='form-control'  name='Objet' /><br />
            <label htmlFor="">Observation :</label>
            <input required onChange={(e)=>{
            setconsultation({...consultation,[e.target.name]: e.target.value})}}  type="text" className='form-control' name='Observation'/><br />
            <label htmlFor="">Date :</label>
            <input required onChange={(e)=>{
            setconsultation({...consultation,[e.target.name]: e.target.value})}}  type="date" name='Date' className='form-control'  /><br />
            <button className='btn btn-warning'>
                Confirmer
            </button>
         </form>
    </div>
  )
}

export default RendezVous