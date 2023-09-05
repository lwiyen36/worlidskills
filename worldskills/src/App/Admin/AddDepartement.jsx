import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddDepartement() {
    const [Nom,setNom]=useState('')
    const [Departements,setDepartements]=useState([])
    const apiUrl = import.meta.env.VITE_API_BASE_URL
    const navigate=useNavigate()
    function getdeps(){
        axios.get(`${apiUrl}/getDepartements`)
        .then((dep)=>{
            setDepartements(dep.data.departements)
        })
    }
    useEffect(()=>{
        getdeps()
    },[])
    function Departement(){
        axios.post(`${apiUrl}/addDepartement`,{Nom})
        .then((e)=>{
            getdeps()
        })
    }
  return (
    <div className='container bg-light rounded-4 p-4 shadow'>
        <h1>Add Departement</h1><br/>
        <form onSubmit={(e)=>{
            e.preventDefault();
            Departement()
        }}>
            <label htmlFor="">Nom Departement :</label>
            <input type="text" onChange={(e)=>{
                setNom(e.target.value)
            }} className='form-control' />
            <br />
            <button className='btn btn-primary'>Ajouter</button>
        </form>
        <table className='table table-striped table-hover text-center'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nom Departement</th>
                </tr>
            </thead>
            <tbody>
                {
                    Departements.map((dep,index)=>{
                        return (<tr key={index}>
                            <td>{dep.idDep}</td>
                            <td>{dep.NomDepartement}</td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default AddDepartement