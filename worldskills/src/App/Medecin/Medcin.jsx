import React from 'react'

export default function Medcin() {
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
                <a href="/MesConsultations" class="nav-item nav-link active">Mes Consultations</a>
                    <a href="/consultations" class="nav-item nav-link ">Tous Les Consultations</a>
                        </div>
                    <a href="/logout" class="nav-item nav-link bg-danger text-light p-2 rounded-4 text-center">Logout</a>
                        
                </div>
        </nav>
  )
}
