import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import Dashbord from '../Dashbord'
import Navbar from '../Navbar'
import Footer from '../Footer'
const CreateUser = () => {
  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [age,setAge]=useState()
  const naviagte=useNavigate()
  const Submit=(e)=>{
    e.preventDefault()//cherch aaliha
    axios.post("http://localhost:4000/create",{name,email,age})
    .then((res)=>{console.log(res)
    naviagte('/home')}
    
    )
    .catch((err)=>console.log(err))

  }
  return (
    <div>
    <Dashbord />
    <main class="main-content border-radius-lg">
      <Navbar />
      <div class="container-fluid py-4">
        <div class="row">
          <div class="col-lg-7 position-relative z-index-2">
            
  
            <div class="row">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div class="col-lg-5 col-sm-5 mt-sm-0 mt-4">
                <br />

                <br /><br />
  
                <form onSubmit={Submit}>
  <div className="form-group row">
    <label  className="col-sm-2 col-form-label" placeholder="Password">Name</label>
    <div className="col-sm-10">
      <input type="text"  className="form-control" placeholder="Entre name" onChange={(e)=>setName(e.target.value)} />
    </div>
  </div><br />
  <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" placeholder='Entre email'  onChange={(e)=>setEmail(e.target.value)}/>
    </div>  </div><br />
    <div className="form-group row">
    <label  className="col-sm-2 col-form-label" >Age</label>
    <div className="col-sm-10">
      <input type="number"  className="form-control"  placeholder='Entre Age' onChange={(e)=>setAge(e.target.value)}/>
    </div>
    </div><br />
    <button type="submit" className="btn btn-primary mb-2">Add User</button>


</form>
              </div>
            </div>
          </div>
        </div>
  
        <div class="row">
          <div class="col-12">
            <div id="globe" class="position-absolute end-0 top-10 mt-sm-3 mt-7 me-lg-7">
              <canvas width="700" height="600" class="w-lg-100 h-lg-100 w-75 h-75 me-lg-0 me-n10 mt-lg-5"></canvas>
            </div>
          </div>
        </div>
  
        <br />
        <Footer />
      </div>
    </main>
  </div>
  )
}

export default CreateUser