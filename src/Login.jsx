import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <TextField variant='outlined' label="Username"/>
        <br/><br/>
        <TextField variant='outlined' label="Password"/>
        <br/><br/>
        <Button variant='contained' color='secondary'>Submit</Button>
    </div>
  )
}

export default Login
