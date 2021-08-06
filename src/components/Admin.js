import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Typography } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export default function Admin(){
    const classes = useStyles();
    return <div>
        <h1>Admin Login</h1>
        <form className={classes.root} noValidate autoComplete="off">
            <div style={{display:"flex",width:"100%", pading:"10px", margin:"10px"}}>
                <Typography style={{padding:"10px",margin:"10px"}}>Username:</Typography>
                <TextField id="outlined-basic" label="Username"  variant="outlined" />
            </div>
            <div style={{display:"flex",width:"100%", pading:"10px", margin:"10px"}}>
                    <Typography style={{padding:"10px",margin:"10px"}}>Username:</Typography>
                    <TextField id="outlined-basic" label="Password"  variant="outlined" />
            </div>
            <Button variant="contained" color="primary" href="/login">Login</Button>
</form>
    </div>
}