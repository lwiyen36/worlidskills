import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {
    const navigate=useNavigate()
    useEffect(()=>{
        localStorage.clear()
        navigate('/login')
       
    })

  return (
    <div>

    </div>
  )
}

export default Logout