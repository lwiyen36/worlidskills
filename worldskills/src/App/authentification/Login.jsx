import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [donne,setdonne]=useState({
        email:"",password:""
    })
    const apiUrl = import.meta.env.VITE_API_BASE_URL
    const [error,seterror]=useState('')
    const navigate=useNavigate()
    function Login(){
        const {email,password}=donne
        axios.post(`${apiUrl}/login`,{email,password}).then((data)=>{
            localStorage.setItem('token',JSON.stringify(data.data.token))
            localStorage.setItem('user',JSON.stringify(data.data.user))
            navigate('/')
            window.location.reload()
        }).catch((err)=>{
            seterror('Mot De passe Ou Email Incorrect')
        })
    }
  return (
    <div className='container shadow p-4 rounded-2 bg-light'>
        {
            error&&(<div className="bg-danger p-2 text-light rounded-2">
            {error}
        </div>)
        }
        
        <h1 className="text-center">Login</h1><br/>
        <div className='login'>
            <form onSubmit={(e)=>{
                e.preventDefault()
                Login()
            }}>
                <label htmlFor="">Email :</label>
                <input onChange={(e)=>{
                    setdonne({...donne,[e.target.name]:e.target.value})
                }} required type="email" name='email' className="form-control" /><br />
                <label htmlFor="">Password :</label>
                <input name='password' onChange={(e)=>{
                    setdonne({...donne,[e.target.name]:e.target.value})
                }} required type="password" className="form-control" /><br />
                <button className='btn btn-primary'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login