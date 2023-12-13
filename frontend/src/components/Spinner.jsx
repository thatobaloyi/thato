import React, { useEffect } from 'react'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {toast} from 'react-toastify'
import { useSelector } from 'react-redux'

function Spinner() {

  const {isError, message} = useSelector((state) => state.auth)
  
  useEffect(()=>{
    if(isError){
      toast.error(message)
    }

  }, [isError, message])
  
  return (
    <div className="spinner-container">
      <ToastContainer></ToastContainer>
      <div className="spinner">
          <div className="cube1"></div>
          <div className="cube2"></div>
      </div>
    </div>
  )
}

export default Spinner