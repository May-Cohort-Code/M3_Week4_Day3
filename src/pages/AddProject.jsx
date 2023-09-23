import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddProject() {

    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        const newProject = {title,description}
        axios.post('http://localhost:5005/api/projects',newProject)
        .then(()=>{
            alert("Project successfully Created")
            navigate('/projects')

        })
    }
    return (
        <div className="AddProject">
            <h3>Add Project</h3>
                        <form onSubmit={handleSubmit}>

                <label>
                    Title
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
                </label>

                <label>
                    Description
                    <input type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
                </label>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddProject