import * as React from 'react';
import { Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1),
    textAlign: 'center',
    fontSize: theme.typography.h1
  }));

export default function BasicGrids(){
    return(
    <Grid item container direction="row" xs={12} sm={12} md={12} lg={12} spacing={1} style={{paddingTop: 100}}>
            <Grid item xs={12} sm={6} md={3} lg={3}>
                {/* <Item>1</Item> */}
                <Paper style={{height: 50, backgroundColor: 'skyblue'}}>1</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
                {/* <Item>2</Item> */}
                <Paper style={{height: 50, backgroundColor: 'skyblue'}}>2</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
                {/* <Item>3</Item> */}
                <Paper style={{height: 50, backgroundColor: 'skyblue'}}>3</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
                {/* <Item>4</Item> */}
                <Paper style={{height: 50, backgroundColor: 'skyblue'}}>4</Paper>
            </Grid>
    </Grid>
    )
}