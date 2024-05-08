import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logOutUser } from '../features/auth/authSlice'

const Navbar = () => {

  const {user} = useSelector((state)=>state.auth);

  const dispatch = useDispatch();

  const handleLogOut = () =>{
    dispatch(logOutUser())
  }

  return (
    <AppBar>
      <Toolbar>
        <Typography variant='h5' flexGrow={1}>
          <Link to={"/"}>Auth app</Link>
        </Typography>

        {
          ! user ? (
            <>
              <Link to={"/Login"}>
                <Button variant='contained' sx={{marginRight:"8px", backgroundColor:"#BA90C6"}}>Login</Button>
              </Link>
              <Link to={"/Register"}>
                <Button variant='contained' sx={{marginRight:"8px",backgroundColor:'#FA26A0'}}>Register</Button>
              </Link> 
            </>
          )
          :
          (
            <Button variant='contained' sx={{backgroundColor:'#424769'}} onClick={handleLogOut}>LogOut</Button>
          )
        }
       
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
