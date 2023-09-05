import React, { useEffect, useState } from 'react'
import Patients from './crud-patient/Patients.jsx'
import {Routes,Route, useNavigate} from 'react-router-dom'
import EditPatient from './crud-patient/EditPatient.jsx'
import RendezVous from './consultations/RendezVous.jsx'
import Consultations from './consultations/Consultations.jsx'
import AddPatient from './crud-patient/AddPatient.jsx'
import Operation from './consultations/Operation.jsx'
import RechercheConsultation from './consultations/RechercheConsultation.jsx'
import Nav from './nav/Nav.jsx'
import AddEmploye from './Admin/AddEmploye.jsx'
import AddMedecin from './Admin/AddMedecin.jsx'
import AddInfermiere from './Admin/AddInfermiere.jsx'
import Login from './authentification/Login.jsx'
import axios from 'axios'
import Assistant from './Assistant/Assistant.jsx'
import Infermier from './infermiere/Infermier.jsx'
import MedecinConsultation from './Medecin/MedecinConsultation.jsx'
import Medcin from './Medecin/Medcin.jsx'
import Admin from './Admin/Admin.jsx'
import Dashboard from './dashboard/dashboard.jsx'
import AttachedFiles from './infermiere/AttachedFiles.jsx'
import Logout from './Logout.jsx'
import AddDepartement from './Admin/AddDepartement.jsx'
function App() {
  const apiUrl = import.meta.env.VITE_API_BASE_URL

  const [role,setrole]=useState('')
  const navigate=useNavigate()
  useEffect((e)=>{
    const token=JSON.parse(localStorage.getItem('token'))
    const user=JSON.parse(localStorage.getItem('user'))
    
    if(token && user){
      let email=user.email
      axios.get(`${apiUrl}/getRole/${email}`)
      .then(
        (data)=>{
          setrole(data.data.role)
        }
      ).catch((err)=>{
        console.log(err);
      })
    }else{
      navigate('/Login')
    }
  },[])
  return (
    <div className='body'>
      {
        role&&(
          role=='Assistant'?(<Assistant />):(role=='Infermiere'?(<Infermier />):(role=='Medecin'?(<Medcin />):(<Admin />)))
        )
      }
      <div >
      <br />
      <Routes>
      {
        role&&(
          role=='Assistant'?(<Route path="/" element={<Patients />} />):(role=='Infermiere'?(<Route path="/" element={<Consultations />} />):(role=='Medecin'?(<Route path="/" element={<MedecinConsultation />} />):(<Route path="/" element={<Dashboard />} />)))
        )
      }
          <Route path="/logout" element={<Logout/>} />
          <Route path="/departements" element={<AddDepartement/>} />
          <Route path="/MesConsultations" element={<MedecinConsultation/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/AddEmploye" element={<AddEmploye/>} />
          <Route path="/consultationFiles/:idConsultation/:TypeConsultation" element={<AttachedFiles/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/AddMedecin" element={<AddMedecin/>} />
          <Route path="/AddInfermiere" element={<AddInfermiere/>} />
          <Route path="/getPatients" element={<Patients/>} />
          <Route path="/RechercheConsultation" element={<RechercheConsultation/>} />
          <Route path="/editPatient/:id" element={<EditPatient/>} />
          <Route path="/rendezvous" element={<RendezVous/>} />
          <Route path="/consultations" element={<Consultations/>} />
          <Route path="/addpatient" element={<AddPatient/>} />
          <Route path="/addoperation" element={<Operation/>} />
          
      </Routes>
      </div>
    </div>
  )
}

export default App