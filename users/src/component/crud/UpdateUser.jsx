import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Dashbord from '../Dashbord'
import Navbar from '../Navbar'
import Footer from '../Footer'

const UpdateUser = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0); // Initialisez age avec 0

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:4000/getuser/' + id)
      .then((res) => {
        console.log(res);
        setName(res.data.name || ''); // Initialisez name avec une chaîne vide
        setEmail(res.data.email || ''); 
        setAge(res.data.age || 0); 
      })
      .catch((err) => console.log(err));
  }, [id]);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put('http://localhost:4000/update/' + id, { name, email, age })
      .then((res) => {
        console.log(res);
        navigate('/home');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Dashbord />
    <main className="main-content border-radius-lg">
      <Navbar />
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-lg-7 position-relative z-index-2">
            <div className="card card-plain mb-4">
              <div className="card-body p-3">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="d-flex flex-column h-100">
                      <h2 className="font-weight-bolder mb-0">General Statistics</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="row">
              <div className="col-lg-5 col-sm-5 mt-sm-0 mt-4">
                <br />
                <br />
                <form onSubmit={Update}>
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                      <input
                        type="email"
                        className="form-control"
                        id="inputPassword"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Age</label>
                    <div className="col-sm-10">
                      <input
                        type="number"
                        className="form-control"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                      />
                    </div>
                  </div>
                  <br />
                  <button type="submit" className="btn btn-success mb-2">
                    Edit User
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
  
        <br />
        <Footer />
      </div>
    </main>
  </div>
  
  );
};

export default UpdateUser;
