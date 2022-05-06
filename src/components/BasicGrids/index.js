import * as React from 'react';
import { Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    backgroundColor: theme.palette.warning,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function BasicGrids(){
    return(
    <Grid item container direction="row" xs={12} sm={12} md={12} lg={12} spacing={2} style={{paddingTop: 100}}>
            <Grid item xs={12} sm={6} md={3} lg={3}>
                <Item>1</Item>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
                <Item>2</Item>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
                <Item>3</Item>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
                <Item>4</Item>
            </Grid>
    </Grid>
    )
}