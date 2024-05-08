import { Button, Card, CardContent, Container, LinearProgress, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerUser } from '../features/auth/authSlice';

const Register = () => {

  
  const dispatch = useDispatch();
  
  const navigate = useNavigate();

  const {user,isLoading,message,isError} = useSelector((state)=>state.auth);

  const [formData,setformData] = useState({
    name: "",
    email:"",
    password:"",
    password2:"",
  });

  const {name,email,password,password2} = formData;

  const handleChange = (e) =>{
    setformData({
      ...formData,
      [e.target.name] : e.target.value
    });
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(registerUser(formData));
  }

  useEffect(()=>{
    if(user){
      navigate("/")
    }

    if(isError || message){
      toast.error(message);
    }
  },[user,isError,message])

  if(isLoading){
    return(
      <Container sx={{padding:"70px 0px"}}>
        <LinearProgress/>
      </Container>
    )
  }

  return (
    <>
      <Card>
        <CardContent>
          <Typography variant='h5' align='center' sx={{margin:"20px 0px",color:"gray"}}>Register Here</Typography>
          <form onSubmit={handleSubmit}>
            <TextField sx={{margin:"6px 0px"}} variant='outlined' label='Enter Name..' name='name' onChange={handleChange} value={name} fullWidth required/>
            <TextField sx={{margin:"6px 0px"}} variant='outlined' label='Enter email..' name='email' onChange={handleChange} value={email} fullWidth required/>
            <TextField sx={{margin:"6px 0px"}} variant='outlined' label='Create Password..' name='password' onChange={handleChange} value={password} fullWidth required/>
            <TextField sx={{margin:"6px 0px"}} variant='outlined' label='Confirm Password..' name='password2' onChange={handleChange} value={password2} fullWidth required/>
            <Button variant='contained' color='success' sx={{margin:"10px 0px",padding:"6px 0px"}} type='submit' fullWidth>Register</Button>
          </form>
        </CardContent>
      </Card>
    </>
  )

}

export default Register;
