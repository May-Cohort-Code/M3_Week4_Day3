import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

/* 
1. Fetching the data for 1 project
2. display the data for the user */

function ProjectDetailsPage() {
    const [project,setProject] = useState(null)
    const {id} = useParams()
    const navigate = useNavigate()

    function deleteProject(){
        axios.delete(`http://localhost:5005/api/projects/${id}`)
        .then(()=>{
            navigate('/projects')
        }).
        catch(err=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        axios.get(`http://localhost:5005/api/projects/${id}`)
        .then((response)=>{
            console.log(response.data)
            setProject(response.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[id])

  return (
    <div className='ProjectDetails'>
        {/* Before we set the state to the 1 project */}
        {project === null && <h2>Loading</h2>}


        {/* After we set the state to the 1 project */}
        {project && (
            <>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            </>
        )}

        {project && project.tasks.map((oneTask)=>{
            return(
                <li className="TaskCard card" key={oneTask._id}>
                    <h3>{oneTask.title}</h3>
                    <p>Description: {oneTask.description}</p>
                </li>
            )
        })}
        <Link to={"/projects"}>
            <button>Go back to Projects</button>
        </Link>


        <Link to={`/projects/${id}/edit`}>
        <button>Edit Project</button>
        </Link>

        <button onClick={deleteProject}>Delete</button>
    </div>
  )
}

export default ProjectDetailsPage