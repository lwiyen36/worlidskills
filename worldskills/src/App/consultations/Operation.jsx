import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Operation() {
    const [consultations,setconsultations]=useState([])
    const [employes,SetEmployes]=useState([])
    const [employesID,SetEmployesID]=useState([])
    const apiUrl = import.meta.env.VITE_API_BASE_URL
    const [operation,setope]=useState({
        BlocOperatoire:'',DateDebut:'',DateFin:'',Observation:'',idConsultation:0
    })
    useEffect(()=>{
        axios.get(`${apiUrl}/consultations`)
        .then((data)=>{
            setconsultations(data.data.consultations)
        })
        axios.get(`${apiUrl}/employes`)
        .then((data)=>{
            SetEmployes(data.data.employes)
        })
    },[])
    const navigate=useNavigate()
    function handleSubmit(){
        function onlyUnique(value, index, array) {
            return array.indexOf(value) === index;
          }
          var unique = employesID.filter(onlyUnique).filter(item=>item!=='');
        axios.post(`${apiUrl}/addoperation`,{operation,employes:unique}).then((data)=>{
            navigate('/consultations')
        }).catch((err)=>{
            alert(err?.message)
        })
    }

  return (
    <div className='container shadow p-4 rounded-2 bg-light'>
        <center><h1>
            Affectation de Operation
        </h1></center>
        <form onSubmit={(e)=>{
            e.preventDefault()
            handleSubmit()
        }}>
            <label htmlFor="">Bloc Operatoire</label><input required onChange={(e)=>{
                setope({...operation,[e.target.name] : e.target.value})}} type="text" className="form-control" name='BlocOperatoire' /><br />
            <label htmlFor="">Date Debut</label><input type="date" required onChange={(e)=>{
                setope({...operation,[e.target.name] : e.target.value})}}  className="form-control" name='DateDebut' /><br />
            <label htmlFor="">Date Fin</label><input type="date" required onChange={(e)=>{
                setope({...operation,[e.target.name] : e.target.value})}} className="form-control" name='DateFin' /><br />
            <label htmlFor="">Observation</label><input type="text" required onChange={(e)=>{
                setope({...operation,[e.target.name] : e.target.value})}} className="form-control" name='Observation' /><br />

            <label htmlFor="">Consultations :</label>
           <select required onChange={(e)=>{
                setope({...operation,[e.target.name] : e.target.value})}} name="idConsultation" className='form-select'>
                    <option value="">Choisir Consultation</option>
           {
                    consultations&&(
                        consultations.map((con,indx)=>{
                            return(<option key={indx} value={con.idConsultation}>
                                {con.Objet}
                            </option>)
                        })
                    )
                }
            </select><br />
            <label htmlFor="">Employes</label>
            <select id='emp' multiple required onChange={(e)=>{
               SetEmployesID([...employesID,e.target.value])}} name="employes" className='form-select'>
           {
                    employes&&(
                        employes.map((con,indx)=>{
                            return(<option key={indx} value={con.idEmp}>
                                {con.Nom} - {con.TypeEmploye}
                            </option>)
                        })
                    )
                }
            </select>
            <br />
            <button className='btn btn-primary'>Affecter</button>
        </form>
    </div>
  )
}

export default Operation