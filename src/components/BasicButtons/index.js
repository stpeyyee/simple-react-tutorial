import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// for import style file
// import { style } from '../../styles/style';
// const useStyles = style

export default function BasicButtons() {
  // for import style
  // const classes = useStyles();
  return (
       <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      // for style button
      // <Button variant="contained" className={classes.roundButton}>Contained</Button>
  );
}