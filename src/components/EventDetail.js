import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@mui/material/Grid';
import Tickets from './Tickets'
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme)=>({
       eventside:{
        background:'linear-gradient(to right, #29467f, #101c32)',
           alignItems:'center',
           justifyContent:'center',
           
       },
       eventTitle:{
           fontFamily:'Russo One',
           fontSize:'4 rem',
           textAlign:'center',
           color:'white',
           paddingTop:'10px'
       },
       eventsTitle:{
        fontFamily:'nunito',
        fontSize:'1.5 rem',
        textAlign:'center',
        color:'white'
    },
    eventsText:{
        fontFamily:'nunito',
        fontSize:'2 rem',
        paddingLeft:'10px',
        paddingRight:'10px',
        textAlign:'center',
        color:'white'
    },
    gridText:{
        fontFamily:'nunito',
        fontSize:'1 rem',
        color:'white'
    },
    gridText1:{
        fontSize:'1.5 rem',
        fontFamily:'nunito',
        color:'white'
    },
    container:{
        background:'linear-gradient(to right, #29467f, #101c32)',
        margin:'auto 0',
        border:'1px solid grey',
    },
      '@media screen and (max-width:1115px)':{
        paddingLeft:'10px',
        width:'250px',
      }

}));

export default function EventDetail(){
    const classes = useStyles();
    return(
        <div  id="tickets" className={classes.eventside}>
            <h1 className={classes.eventTitle}>Event Details</h1>
            <h3 className={classes.eventsTitle}>2022 ideaNexT<span>&#174;</span> Expo</h3>
            <h4 className={classes.eventsText}>This exhibition seeks opportunities and collaborations at the convergence of innovations, businesses, and technologies.<br></br>
             This is also known as IdeaNexT® Innovation Fair and it is a multi-sectoral trade event that provides provides platform for local and international exhibitors <br></br>
             to promote their innovative- and tech- driven products & services, access new market, build brand awareness, display their products,showcase their innovative<br></br>
             services, display emerging technologies shaping our  world, interact with potential inventors, partners, and clients.</h4>
            
             <h1  className={classes.eventTitle}>Exibitaion Space bookings</h1>
             <Grid   classes={classes.container} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            
             <Grid item xs={3}>
                  <Tickets 
                        ticketTitle="FOR INDOOR SHELL SCHEME STANDS"
                        ticketQuantity="Quantity in 9sqm"
                        ticketPrice="25,000 per sqm"
                        ticketInfo="Payment covers: 1 tabel, 2 chairs, 1 spot light,
                        power point and fascial"
                        ticketLprice="225,000"
                        />
                    
                 </Grid>

                 <Grid item xs={3}>
                  <Tickets 
                        ticketTitle="OUTDOOR SPACCE Premium Area"
                        ticketQuantity="Quantity in 72sqm"
                        ticketPrice="20,000 per sqm"
                        ticketInfo="Space with power utility only"
                        ticketLprice="1,440,000"
                        />
                    
                 </Grid>
                 <Grid item xs={3}>
                  <Tickets 
                        ticketTitle="FOR VENDORS(OUTDOOOR)"
                        ticketQuantity="limited spaces are available at
                        Organizer's DISCRETION"
                      
                       
                        ticketLprice="250,000"
                        />
                    
                 </Grid>

                 <Grid item xs={3}>
                  <Tickets 
                        ticketTitle="GOVERNMENT AGENCIES OUTDOOR SPACE"
                        ticketQuantity="Quantity in 45sqm"
                        ticketPrice="20,000 per sqm"
                       
                       
                        ticketLprice="900,000"
                        />
                    
                 </Grid>
                
                 <Grid item xs={3}>
                  <Tickets 
                        ticketTitle="GOVERNMENT AGENCIES INTDOOR SPACE"
                        ticketQuantity="Quantity in 36sqm"
                        ticketPrice="45,000 per sqm"
                       
                       
                        ticketLprice="1,620,000"
                        />
                    
                 </Grid>

                 <Grid item xs={3}>
                  <Tickets 
                        ticketTitle="EMBASIS,TRADE PROMOTION AGENCIES"
                        ticketQuantity="Indoor pavilion only"
                        ticketPPrice="Cost is $1,200 per 9sqm with minimun of 72sqm"
                       
                       
                        ticketDLprice="$9,600"
                        />
                    
                 </Grid>

                 <Grid item xs={3}>
                  <Tickets 
                        ticketTitle="AfCFTA COUNTRIES: INDOOR AND OUTDORR"
                        ticketQuantity="Quantity in 9sqm"
                        ticketPrice="N25,000 per sqm"
                       
                       
                        ticketLprice="1,045,000"
                        />
                    
                 </Grid>
         </Grid>
        </div>

    );
}