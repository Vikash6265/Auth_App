import { Container, LinearProgress, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import welcome from '../assets/welcome.gif'

const Home = () => {

  const {user,isLoading,isError,message} = useSelector((state)=>state.auth);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(()=>{
    if(!user){
      navigate("/Login");
      // navigate("/Register");
    }

    if(isError || message){
      toast.error(message);
    }

  },[user,isError,message])

  if(isLoading ){ //  || coins.length === 0
    return(
      <Container sx={{padding:"70px 0px"}}>
        <LinearProgress/>
      </Container>
    )
  }


  return (
    <>
      <Typography variant='h3' align='center' sx={{color:'#8C6A5D'}}>Welcome User</Typography>
      <img className='imgtag' src={welcome} alt="" />
    </>
  )
}

export default Home;
