import React ,{ useState, useEffect } from 'react'
import { useParams} from 'react-router-dom';
import axios from 'axios';
import Dashbord from '../Dashbord'
import Navbar from '../Navbar'
import Footer from '../Footer'
const ViewUser = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(0); // Initialisez age avec 0
  
  
    useEffect(() => {
      axios
        .get('http://localhost:4000/view/' + id)
        .then((res) => {
          console.log(res);
          setName(res.data.name || ''); // Initialisez name avec une chaîne vide
          setEmail(res.data.email || ''); 
          setAge(res.data.age || 0); 
        })
        .catch((err) => console.log(err));
    }, [id]);
  return (
    <div>
  <Dashbord />
  <main class="main-content border-radius-lg">
    <Navbar />
    <div class="container-fluid py-4">
      <div class="row">
        <div class="col-lg-7 position-relative z-index-2">
          <div class="card card-plain mb-4">
            <div class="card-body p-3">
              <div class="row">
                <div class="col-lg-6">
                  <div class="d-flex flex-column h-100">
                    <h2 class="font-weight-bolder mb-0">General Statistics</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-5 col-sm-5 mt-sm-0 mt-4">
              <br />

              <br /><br />
              <div>
        Name: {name} <br />
        Email: {email}<br/>
        Age : {age}
      </div>


             
            </div>
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

export default ViewUser