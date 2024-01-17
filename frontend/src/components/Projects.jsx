import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../services/authSlice';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {toast} from 'react-toastify'

const Projects = () => {
  const dispatch = useDispatch()
  const projects  = useSelector((state) => state.auth.projects)
  const {isError, message} = useSelector((state) => state.auth)

  useEffect(()=>{
    if(projects.length === 0){
      dispatch(getProjects())
    }
    
    }, [dispatch, isError]
  )

  
  return (

    <div className='projects'>
      <ToastContainer></ToastContainer>
      <h1>GitHub Projects</h1>
      <center><hr /></center>
      {projects.length > 0 ? (<ul>
        {projects.map((project) => (
          <div className="project" key={crypto.randomUUID()}>
            <li>
              <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
              <p>{project.description}</p>
            </li>
          </div>
        ))}
      </ul>) : (<p>{message}</p>)}
    </div>
  )
}

export default Projects