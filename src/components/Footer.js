import * as React from "react";
import { makeStyles } from '@material-ui/styles';



const useStyles = makeStyles((theme)=>({
    footerText:{
        fontFamily:'nunito',
        fontSize:'13px',
        textAlign:'center'
    },
    footerr:{
        backgroundColor:'#040720',
        color:'snow'
    }
 
 }))

export default function Footer() {
    const classes = useStyles();
  return (
      <div className="footerr">
       <p className={classes.footerText}>Powered by Nationwide Integrated Software Solutions Consults</p>
       <p className={classes.footerText}>Copyright<span>&#169;</span> Nationwide Integrated Software Solutions Consults 2022 </p>
      </div>
  );
}