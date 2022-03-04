import * as React from "react";
import { makeStyles } from '@material-ui/styles';
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';


const useStyles = makeStyles((theme)=>({
    root:{
      border:'1px solid #040720',
      background:'#040720',
      color:'snow',
      borderRadius:'7px',
      paddingLeft:'10px',
      height:'350px',
      '@media screen and (max-width:600px)':{
        paddingLeft:'10px'
      },
      '@media screen and (max-width:1115px)':{
        marginLeft:'10px'
      }
      
    },
    card:{
      background:'#040720',
      width:'auto',
      border:'1px solid #040720',
      borderRadius:'10px',
      marginLeft:'10px',
      paddingLeft:'10px',
      marginRight:'10px',
      marginBottom:'30px',
    },
    left:{
      textAlign:'right',
      fontSize:'1 rem',
      fontFamily:'nunito'
    },
    button:{
      background:'white',
      color:'#333'
    },
    text:{
      '@media screen and (max-width:1115px)':{
        fontSize:'15px',  
      },
    }
 
 }))

export default function Tickets(props) {
    const classes = useStyles();
  return (
    <div className={classes.card}>
      <CardContent className={classes.root}>
        <h5 className={classes.text}>{props.ticketName} </h5>

        <h4 className={classes.text}> {props.ticketTitle}</h4>
        <h4 className={classes.text}> {props.ticketQuantity}</h4>
        <h4 className={classes.text}>{props.ticketPrice}</h4>
        <h4 className={classes.text}>{props.ticketPPrice}</h4>
        <h4 className={classes.text}>{props.ticketInfo}</h4>
        <hr/>
        <h3>*Vat Exclusive</h3>
        <h4 className={classes.left}>{props.ticketDLprice}</h4>
        <h4 className={classes.left}>{props.ticketLprice}</h4>
      </CardContent>
      <CardActions>
       <Link to="/{props.link}"> <Button className={classes.button} variant="outlined" size="small">Reserve now</Button></Link>
      </CardActions>
    </div>
  );
}
