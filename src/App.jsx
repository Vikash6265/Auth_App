import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Container } from '@mui/material'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
   <Router>
     <Navbar/>
     <Container maxWidth="xl" sx={{width:"100%",minHeight:"100vh",padding:"100px 0px",backgroundColor:"#E3E1D9",
      display:'flex',alignItems:'center',justifyContent:'center'}}>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Login' element={<Login/>}/>
      </Routes>
      <ToastContainer/>
     </Container>
   </Router>
  )
}

export default App
