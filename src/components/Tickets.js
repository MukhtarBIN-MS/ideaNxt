import * as React from "react";
import { makeStyles } from '@material-ui/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';


const useStyles = makeStyles((theme)=>({
    root:{
      border:'1px solid white',
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
      background:'snow',
      width:'auto',
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
      background:'green',
      color:'white'
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
    <Card className={classes.card}>
      <CardContent className={classes.root}>
        <h2 className={classes.text}>{props.ticketName} </h2>

        <h2 className={classes.text}> {props.ticketTitle}</h2>
        <h4 className={classes.text}> {props.ticketQuantity}</h4>
        <h4 className={classes.text}>{props.ticketPrice}</h4>
        <h4 className={classes.text}>{props.ticketPPrice}</h4>
        <h4 className={classes.text}>{props.ticketInfo}</h4>
        <hr/>
        <h3>*Vat Exclusive</h3>
        <h4 className={classes.left}>{props.ticketDLprice}</h4>
        <h4 className={classes.left}>&#8358;{props.ticketLprice}</h4>
      </CardContent>
      <CardActions>
        <Button className={classes.button} variant="outlined" size="small">Reserve now</Button>
      </CardActions>
    </Card>
  );
}
