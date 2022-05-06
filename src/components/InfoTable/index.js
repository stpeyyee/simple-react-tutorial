
import * as React from 'react';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, TextField } from '@mui/material';


export default function InfoTable({data, onUpdate, onDelete}){
    return(
        <Grid item lg={12} style={{padding: 100}} align="center">
            <Grid item lg={12} align="center">
                Info Table
            </Grid>
            <Grid item lg={12}>
                <TableContainer>
                    <Table size="small" stickyHeader style={{border: '1px solid gray'}}>
                        <TableHead>
                            <TableRow key={"header"}>
                                <TableCell>
                                    First Name
                                </TableCell>
                                <TableCell>
                                    Last Name
                                </TableCell>
                                <TableCell>
                                    Email
                                </TableCell>
                                <TableCell>

                                </TableCell>
                            </TableRow>
                        </TableHead>
                        {data.length > 0 &&
                        <TableBody>
                            {data.map((obj) => {
                                return(
                                <TableRow key={obj.id}>
                                    <TableCell>
                                        {obj.firstName}
                                    </TableCell>
                                    <TableCell>
                                        {obj.lastName}
                                    </TableCell>
                                    <TableCell>
                                        <TextField value={obj.email} onChange={(e)=>onUpdate(obj.id, e.target.value)}></TextField>
                                    </TableCell>
                                    <TableCell>
                                        <Button onClick={()=>onDelete(obj.id)}>Delete</Button>
                                    </TableCell>
                                </TableRow>
                                )
                            })}
                        </TableBody>
                        }
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>

    )
}