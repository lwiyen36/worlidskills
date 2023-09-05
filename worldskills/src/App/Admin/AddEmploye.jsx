import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddEmploye() {
    const [donne,setdonne]=useState({
        TypeEmploye:'',Nom:'',Prenom:'',Email:'',
        Tel:0,password:''
    })
    const apiUrl = import.meta.env.VITE_API_BASE_URL

    const [success,setsuccess]=useState('')
    function handleSubmit(){
        axios.post(`${apiUrl}/AddEmploye`,{donne}).then((data)=>{
            setsuccess(data.data.message)
            setTimeout(()=>{
                setsuccess('')
            },3000)
            
        })
    }
  return (
    <div className='container'>
        <h1 className="text-center">Add Employees</h1><br/>
        {
            success&&(
                <div className="bg-success text-light p-2 rounded-2">
                    {
                        success
                    }
                    </div>
            )
        }
        
        <form onSubmit={(e)=>{
            e.preventDefault()
            handleSubmit()
        }}>
            <label htmlFor="">Type D'Emploi :</label>
            <input required onChange={(e)=>{
                setdonne(prev=> ({...prev,[e.target.name]:e.target.value}))}} type="text" name='TypeEmploye' className="form-control" /><br />

                <label htmlFor="">Nom :</label><input name='Nom' required onChange={(e)=>{
                setdonne(prev=> ({...prev,[e.target.name]:e.target.value}))}} type="text" className="form-control" /><br />

                <label htmlFor="">Prenom :</label><input required name='Prenom' onChange={(e)=>{
                setdonne(prev=> ({...prev,[e.target.name]:e.target.value}))}} type="text" className="form-control" /><br />

                <label htmlFor="">Email :</label><input required name='Email' onChange={(e)=>{
                setdonne(prev=> ({...prev,[e.target.name]:e.target.value}))}} type="email" className="form-control" /><br />
                
                <label htmlFor="">Telephone :</label><input required onChange={(e)=>{
                setdonne(prev=> ({...prev,[e.target.name]:e.target.value}))}} type="number" name='Tel' className="form-control" /><br />
                <label htmlFor="">Password :</label><input onChange={(e)=>{
                setdonne(prev=> ({...prev,[e.target.name]:e.target.value}))}} type="password" required name='password' className="form-control" /><br />

            <button className='btn btn-primary'>Ajouter</button>
        </form>

    </div>
  )
}

export default AddEmploye