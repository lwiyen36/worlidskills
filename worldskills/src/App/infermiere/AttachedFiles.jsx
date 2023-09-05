import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function AttachedFiles() {
    const apiUrl = import.meta.env.VITE_API_BASE_URL
    const [attachedFiles,setattached]=useState([])
    const  [Message,setmsg]=useState()
    const {idConsultation}=useParams()
    const {TypeConsultation}=useParams()
    function handleSubmit(){
        const data = new FormData();
        data.append('idConsultation', idConsultation);
        data.append('TypeConsultation',TypeConsultation);
        attachedFiles.map((file,index) => {
            data.append(`attachedFiles_${index}`, file);
        });
        data.append('count',attachedFiles.length)
        console.log(data.get('attachedFiles_0'));
        // const data={idConsultation,attachedFiles,TypeConsultation}
        axios.post(`${apiUrl}/AddFiles`,data,{
            headers: {
              'Content-Type': 'multipart/form-data', // Important for Laravel to parse the data correctly
            }})
        .then((data)=>{
            setmsg('Ajouter Par success')
            setTimeout(()=>{
                setmsg('')
            },3000)
           
        })
        .catch((err)=>{
            console.log(err);
        })

        
    }
  return (
    <div className='container'>
        <h1 className="text-center">Attached Files On Consultation/Operation</h1>
        <br />
        {
            Message && (<div className='bg-success rounded-4 p-2 text-light'>
                {Message}
            </div>)
        }
        <form onSubmit={(e)=>{
            e.preventDefault()
            handleSubmit()
        }}>
            <label htmlFor="">idConsultation :</label>
            <input className='form-control' type="text" disabled name='idConsultation' value={idConsultation}/> <br />
            <label htmlFor="">TypeConsultation :</label>
            <input className='form-control' type="text" disabled name='TypeConsultation' value={TypeConsultation}/> <br />
            <label htmlFor="">Attached Files</label><input multiple type="file" onChange={(e)=>{
                setattached([...e.target.files])
            }} className='form-control'  name='attachedFiles' /> <br />
            <button className='btn btn-info'>Submit</button>

        </form>
    </div>
  )
}

export default AttachedFiles