import * as React from 'react';
import { useState, useEffect } from 'react';
import { Grid, TextField, Button } from '@mui/material';

export default function AddInfo({onAdd}){
    let [firstName, setFirstName] = useState("")
    let [lastName, setLastName] = useState("")
    let [email, setEmail] = useState("")

    useEffect(() => {
        console.log("firstName",firstName)
    }, [firstName])


    return(
        <>
            <Grid item lg={12} style={{padding: 100}} align="center">

                <Grid item container lg={12} direction="row" alignItems="center" alignSelf="center" justifyContent="center" style={{width: '50vw'}} spacing={1}>
                    <Grid item lg={12}>
                        Add Data
                    </Grid>
                    <Grid item lg={12}>
                        <Grid item container lg={12} spacing={1}>
                            <Grid item lg={4}>
                                <TextField label="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}></TextField>
                            </Grid>
                            <Grid item lg={4}>
                                <TextField label="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}></TextField>
                            </Grid>
                            <Grid item lg={4}>
                                <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)}></TextField>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item lg={12}>
                        <Button onClick={()=>onAdd(firstName, lastName, email)}>Add</Button>
                    </Grid>
                </Grid>

            </Grid>
            
        </>

    )
}