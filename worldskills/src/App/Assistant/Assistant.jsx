import React from 'react'
import '../Nav.css'

function Assistant() {
  return (
    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <a href="#" class="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
                <h1 class="m-0 text-danger">HOSPITAL</h1>
            </a>
            <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto p-4 p-lg-0">
                         <a href="/getPatients" class="nav-item nav-link active">Home</a>
                    <a href="/addpatient" class="nav-item nav-link ">add patient</a>
                    <a href="/addoperation" class="nav-item nav-link ">add operation</a>
                    <a href="/RechercheConsultation" class="nav-item nav-link ">Rechercher Consultation</a>
                    <a href="/rendezvous" class="nav-item nav-link ">Rendez-Vous</a>
                    <a href="/consultations" class="nav-item nav-link">consultations</a>
                  
                        </div>
                        <a href="/logout" class="nav-item nav-link bg-danger text-light p-2 rounded-4 text-center">Logout</a>
                    
                </div>

        </nav>
  )
}

export default Assistant