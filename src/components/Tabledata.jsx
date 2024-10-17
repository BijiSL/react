import { Table,TableBody, TableCell, TableContainer, TableHead, TableRow,Paper } from '@mui/material'
import React from 'react'

const Tabledata = () => {
  const rows=[
    {id:1,Name:'Biji',age:28,Occupation:'Engineer'},
    {id:2,Name:'Sam',age:28,Occupation:'CEO'},
    {id:3,Name:'Maya',age:28,Occupation:'Teacher'},
];
  return (
    <div>
      <TableContainer component={{Paper}}>
    <Table>
      <TableHead>
        <TableRow>
        <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Age</TableCell>
          <TableCell>Occupation</TableCell>
        </TableRow>
      </TableHead>
  
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.Name}</TableCell>
            <TableCell>{row.age}</TableCell>
            <TableCell>{row.Occupation}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
</div>
  )
}

export default Tabledata


   
 
   


