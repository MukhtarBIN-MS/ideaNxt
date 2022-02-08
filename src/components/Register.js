import React from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "@mui/material/Button";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  Rcontainer: {
      border:'1px solid grey',
      padding:'5px',
      background:'#000080'
  },
  title:{
      fontFamily:'Russo one',
      textAlign: 'center',
      fontSize:'2 rem',
      color:'#F2F3F5'
  },
   button:{
       alignItems:'center',
       justifyContent:'center',
       left:'45%',
       '@media screen and (max-width:480px)':{
        left:'35%',
       },
       '@media screen and (max-width:600px)':{
        left:'35%',
       }
   },
   btn:{
       textDecoration:'none'
   }
}));

export default function Register() {
  const classes = useStyles();
  return(

  <div id="reg" data-aos="flip-right" className={classes.Rcontainer}>
    <h2 className={classes.title}>Register to Attend</h2>
    <Link className={classes.btn} to="/register">
    <Button className={classes.button} variant="contained" color="success">
      Register
    </Button>
    </Link>
  </div>

  )}
