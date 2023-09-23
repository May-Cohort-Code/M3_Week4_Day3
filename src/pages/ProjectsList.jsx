import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import AddProject from './AddProject'

function ProjectsList() {
    const [projects, setProjects] = useState([])

    function getProjects() {
        //fetch the data for all projects when the component first loads
        axios.get('http://localhost:5005/api/projects')
            .then((response) => {
                setProjects(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getProjects()
    }, [])

    function deleteProject(id){
        axios.delete(`http://localhost:5005/api/projects/${id}`)
        .then(()=>{
            getProjects()
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div className='ProjectListPage'>
            <AddProject getProjects={getProjects}></AddProject>
            {projects.map((oneProject) => {
                return (
                    <div className="ProjectCard card" key={oneProject._id}>
                        <Link to={`/projects/${oneProject._id}`}>
                            <h3>{oneProject.title}</h3>

                        </Link>
                        <button onClick={()=>{deleteProject(oneProject._id)}}>Delete</button>
                    </div>
                )
            })}

        </div>
    )
}


//exercise

//add a functioning delete button in the EditProject.jsx component


export default ProjectsList