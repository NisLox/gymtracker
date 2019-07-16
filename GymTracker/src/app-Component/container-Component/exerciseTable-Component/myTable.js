import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function SimpleTable({rows}) {

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Exercise</TableCell>
            <TableCell>Set1</TableCell>
            <TableCell>Set2</TableCell>
            <TableCell>Set3</TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell >{row.Exercise}</TableCell>
              <TableCell >{row.Set1}</TableCell>
              <TableCell >{row.Set2}</TableCell>
              <TableCell >{row.Set3}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}