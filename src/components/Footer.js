import * as React from "react";
import { makeStyles } from '@material-ui/styles';



const useStyles = makeStyles((theme)=>({
    footerText:{
        fontFamily:'nunito',
        fontSize:'15px',
        textAlign:'center'
    },
    footer:{
        marginTop:'30px'
    }
 
 }))

export default function Footer() {
    const classes = useStyles();
  return (
      <div className="footer">
       <p className={classes.footerText}>Powered by Nationwide Integrated Software Solutions Consults</p>
       <p className={classes.footerText}>Copyright<span>&#169;</span> Nationwide Integrated Software Solutions Consults 2022 </p>
      </div>
  );
}