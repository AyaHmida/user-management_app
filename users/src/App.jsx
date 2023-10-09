import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {CreateUser,UpdateUser,AllUsers, ViewUser, Signup, Login, Dashbord, Navbar} from './component/index'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Routes>
      <Route path="/home" element={<AllUsers />} ></Route>
       <Route path="/create" element={<CreateUser />} ></Route>
       <Route path="/update/:id" element={<UpdateUser />} ></Route>
       <Route path="/view/:id" element={<ViewUser />} ></Route>
       <Route path="/signup" element={< Signup/>} ></Route>
       <Route path="/" element={<Login />} ></Route>
       <Route path="/dashbord" element={<Dashbord />} ></Route>
      </Routes>
     </BrowserRouter>
     
    </>
  )
}

export default App
