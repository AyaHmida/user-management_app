import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Dashbord from '../Dashbord'
import Navbar from '../Navbar'
import Footer from '../Footer'

const AllUsers = () => {
  const [users,setUsers]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:4000/users')
    .then((res)=> setUsers(res.data))
    .catch((err)=>console.log(err))
  
  })
  const handleDelete=(id)=>{
    axios.delete('http://localhost:4000/delete/'+id)
    .then((res)=> {console.log(res)
      window.location.reload()
    })
    .catch((err)=>console.log(err))

  }
  return (
<div>
  <Dashbord />
  <main className="main-content border-radius-lg">
    <Navbar />
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-lg-7 position-relative z-index-2">
          
          <div className="row">
            <div className="col-lg-5 col-sm-5 mt-sm-0 mt-4">
              <br />
              <div className="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                <Link to="/create"><i className="material-icons opacity-10">person_add</i></Link>
              </div>
              <br /><br />

              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Age</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => {
                    return (
                      <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td>
                          <Link to={`/update/${user._id}`} className="btn btn-success">Edit</Link>
                          <button className="btn btn-danger" onClick={(e) => handleDelete(user._id)}>Delete</button>
                          <Link to={`/view/${user._id}`} className="btn btn-success">View</Link>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div  className="position-absolute end-0 top-10 mt-sm-3 mt-7 me-lg-7">
            <canvas width="700" height="600" className="w-lg-100 h-lg-100 w-75 h-75 me-lg-0 me-n10 mt-lg-5"></canvas>
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

export default AllUsers