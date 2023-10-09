import React, { useState } from 'react'
import './signup.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Signup = () => {
  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const naviagte=useNavigate()
  const Submit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:4000/signup',{name,email,password})
    .then((res)=>{console.log(res)
     naviagte('/')})
     .catch((err)=>console.log(err))

  }

  return (
    <div>
          <section className="vh-100" >
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow-2-strong" >
            <div className="card-body p-5 text-center">
            <form onSubmit={Submit} >

              <h3 className="mb-5">Registre</h3>
              <div className="form-outline mb-4">

                <input type="text"  className="form-control form-control-lg" placeholder='Name' onChange={(e)=>setName(e.target.value)}  required/>
              </div>

              <div className="form-outline mb-4">

                <input type="email"  className="form-control form-control-lg" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} required/>
              </div>

              <div className="form-outline mb-4">
                <input type="password"  className="form-control form-control-lg" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} required />
              </div>


              <button className="btn btn-primary btn-lg btn-block" type="submit">Sign up</button>
              <br /><br/>
                  <Link to={'/'}>back to Login page</Link>


             </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

    </div>

    
  )
}

export default Signup