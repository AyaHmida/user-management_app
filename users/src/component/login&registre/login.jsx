import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/login', { email, password });
            const token = response.data.data; // Assuming the token is in response.data.data
            localStorage.setItem("token", token);
            console.log(token)
            navigate('/home')     
        } catch (err) {
            console.error(err);
            // Handle error here, e.g., display an error message to the user
        }
    }
    

    return (
        <section className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong">
                            <div className="card-body p-5 text-center">
                                <form onSubmit={handleSubmit}>
                                    <h3 className="mb-5">Sign in</h3>
                                    <div className="form-outline mb-4">
                                        <input
                                            type="email"
                                            className="form-control form-control-lg"
                                            placeholder='Email'
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input
                                            type="password"
                                            className="form-control form-control-lg"
                                            placeholder='Password'
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-check d-flex justify-content-start mb-4">
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label"> Remember password </label>
                                    </div>
                                    <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                                    <br /><br/>
                                    <p className="mb-5 pb-lg-2" >Don't have an account? 
                                        <Link to={'/signup'}>Register here</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
