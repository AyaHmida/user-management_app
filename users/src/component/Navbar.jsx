import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();

  const Logout=()=>{

  }
  return (

    <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" data-scroll="true">
  <div className="container-fluid py-1 px-3">

    <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
      <div className="ms-md-auto pe-md-3 d-flex align-items-center">
 
      </div>
      <ul className="navbar-nav  justify-content-end">
 
        <li className="nav-item d-flex align-items-center">
          <Link  className="nav-link text-body font-weight-bold px-0">
          <button onClick={Logout} >

            <i className="fa fa-user me-sm-1"></i>
            
           <span  className="d-sm-inline d-none">Sign In</span></button> 
            
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar