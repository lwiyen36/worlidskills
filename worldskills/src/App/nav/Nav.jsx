import React, { useEffect, useState } from 'react'
import '../Nav.css'
import axios from 'axios'
function Nav() {
    const [role,setrole]=useState('')
    const token=localStorage.getItem('token')
    useEffect(()=>{
        if(token){
            axios.get('http://localhost:8000/api/getRole')
            .then((data)=>{
                setrole(data.data.role)
            })
        }
    },[])
  return (
    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <a href="#" class="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
                <h1 class="m-0 text-danger">HOSPITAL</h1>
            </a>
            <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
            {
                token&&(
                <div class="navbar-nav ms-auto p-4 p-lg-0">
                    {
                    role=='Infermiere'&&(
                        <div class="navbar-nav ms-auto p-4 p-lg-0">
                        <a href="/getPatients" class="nav-item nav-link active">Home</a>
                        <a href="/RechercheConsultation" class="nav-item nav-link ">RechercheConsultation</a>
                        <a href="/consultations" class="nav-item nav-link">consultations</a>
                        </div>
                    )
                }
                {
                    role=='Assistant'&&(
                        <div class="navbar-nav ms-auto p-4 p-lg-0">
                         <a href="/getPatients" class="nav-item nav-link active">Home</a>
                    <a href="/addpatient" class="nav-item nav-link ">addpatient</a>
                    <a href="/addoperation" class="nav-item nav-link ">addoperation</a>
                    <a href="/RechercheConsultation" class="nav-item nav-link ">RechercheConsultation</a>
                    <a href="/rendezvous" class="nav-item nav-link ">Rendez-Vous</a>
                    <a href="/consultations" class="nav-item nav-link">consultations</a>
                    <a href="/addEmploye" class="nav-item nav-link">addEmploye</a>
                    <a href="/AddMedecin" class="nav-item nav-link">AddMedecin</a>
                    <a href="/AddInfermiere" class="nav-item nav-link">AddInfermiere</a>
                        </div>
                    )
                }
                   
                    {
                        !token&&(
                            <a href="/login" class="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Login<i class="fa fa-arrow-right ms-3"></i></a>
                        )
                    }
                    
                </div>
                )
            }
            </div>
        </nav>
  )
}

export default Nav