import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

function ProjectsList() {
    const [projects,setProjects] = useState([])

    useEffect(()=>{
        //fetch the data for all projects when the component first loads
        axios.get('http://localhost:5005/api/projects')
        .then((response)=>{
            setProjects(response.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

  return (
    <div className='ProjectListPage'>
        {projects.map((oneProject)=>{
            return(
                <div className="ProjectCard card" key={oneProject._id}>
                    <Link to={`/projects/${oneProject._id}`}>
                    <h3>{oneProject.title}</h3>

                    </Link>
                </div>
            )
        })}
        
    </div>
  )
}

export default ProjectsList