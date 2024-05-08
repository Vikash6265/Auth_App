import { Button, Card, CardContent, Container, LinearProgress, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUser } from '../features/auth/authSlice';

const Login = () => {

  const {user,isLoading,message,isError} = useSelector((state)=>state.auth);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [formData,setformData] = useState({
    email:"",
    password:"",
  });

  const {email,password} = formData;

  const handleChange = (e) =>{
    setformData({
      ...formData,
      [e.target.name] : e.target.value,
    })
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(loginUser(formData))
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
    <Card>
      <CardContent>
        <Typography variant='h5' align='center' sx={{margin:"20px 0px",color:"gray"}}>Login Here</Typography>
        <form onSubmit={handleSubmit}>
          <TextField variant='outlined' label='Enter email..' name='email' onChange={handleChange} fullWidth sx={{margin:"6px 0px"}}/>
          <TextField variant='outlined' label='Enter password..' name='password' onChange={handleChange} fullWidth sx={{margin:"6px 0px"}}/>
          <Button variant='contained' fullWidth color='success' sx={{margin:"12px 0px",padding:"6px 0px"}} type='submit'>Login</Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default Login;
