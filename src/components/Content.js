import React from 'react';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles((theme)=>({
       eventside:{
           alignItems:'center',
           justifyContent:'center'
       },
       eventTitle:{
           fontFamily:'Russo One',
           fontSize:'3 rem',
           textAlign:'center'
       },
       eventsTitle:{
        fontFamily:'nunito',
        fontSize:'1.5 rem',
        textAlign:'center'
    }

}));

export default function EventTitle(){
    const classes = useStyles();
    return(
        <div className={classes.eventside}>
            <h1 className={classes.eventTitle}>2022 IdeaNexT<span>&#174;</span> Expo & Confernce</h1>
            <h3 className={classes.eventsTitle}>1st ideaNext<span>&#174;</span> International Innovations Trade fair</h3>
            <h4 className={classes.eventsTitle}>Exploring opportunities at the convergence of Innovations,
                Business and Technologies
            </h4>
        </div>

    );
}