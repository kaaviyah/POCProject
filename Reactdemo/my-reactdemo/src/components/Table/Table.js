import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css'

function createData(
  name,TrackingId,
  Date,
  Status
) {
  return { name,TrackingId, Date, Status };
}

const rows = [
  createData('Frozen yoghurt', "1591234", "1-06-2023", "Approved"),
  createData('Ice cream sandwich', "237123", "2-06-2023", "Approved"),
  createData('Cake', "262234", "2-06-2023", "Approved"),
  createData('Cupcake', "3051234","3-06-2023", "Approved"),
  createData('Gingerbread',"3561234","4-06-2023", "Approved"),
];

const makeStyles=(Status)=>{
    if(Status==='Approved')
    {
        return{
            background:'rgb(145 254 159/47%)',
            color:'green',
        }
       
    
    }
    else if(Status ==='Pending')
    {
        return{
            background:"ffadad8f",
            color:'red'
        }
    }
    else{
        return{
            background:"#59bfff",
            color:"white",
        }
    }
    
    
    
    }
    export default function BasicTable(){
      return (
    <div className="Table"
    style={{boxShadow:'0px 13px 20px 0px #80808029'}}
    >
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Product</TableCell>
            <TableCell align="left">Tracking ID</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Status</TableCell>
            {/* <TableCell align="left">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.TrackingId}</TableCell>
              <TableCell align="left">{row.Date}</TableCell>
              <TableCell align="left">
                <span className='status' style={makeStyles(row.Status)}>
                {row.Status}
                </span>
                
                
                </TableCell>
              {/* <TableCell align="left">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
