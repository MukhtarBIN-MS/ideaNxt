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
      height:'350px',
      
      
    },
    card:{
      background:'snow',
      width:'300px',
      marginLeft:'10px',
      marginRight:'10px',
      marginBottom:'30px'
    },
    left:{
      textAlign:'right',
      fontSize:'1 rem',
      fontFamily:'nunito'
    },
    button:{
      background:'green',
      color:'white'
    }
 
 }))

export default function Tickets(props) {
    const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.root}>
        <h2>{props.ticketName} </h2>

        <h2> {props.ticketTitle}</h2>
        <h4> {props.ticketQuantity}</h4>
        <h4><span>&#8358;</span>{props.ticketPrice}</h4>
        <h4>{props.ticketInfo}</h4>
        <hr/>
        <h3>*Vat Exclusive</h3>
        <h4 className={classes.left}>{props.ticketDLprice}</h4>
        <h4 className={classes.left}><span>&#8358;</span>{props.ticketLprice}</h4>
      </CardContent>
      <CardActions>
        <Button className={classes.button} variant="outlined" size="small">Reserve now</Button>
      </CardActions>
    </Card>
  );
}
