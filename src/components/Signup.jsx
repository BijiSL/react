
import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
       <TextField variant='outlined' label="Name"/>
       <br/><br/>
       <TextField variant='outlined' label="Age"/>
       <br/><br/>
       <TextField variant='outlined' label="Place"/>
       <br/><br/>
       <TextField variant='outlined' label="Father's Name"/>
       <br/><br/>
       <TextField variant='outlined' label="Mother's Name"/>
       <br/><br/>
       <Button variant='contained' color='success'>Sign In</Button> 
        </div>
  )
}

export default Signup