import * as React from "react";
import { makeStyles } from '@material-ui/styles';



const useStyles = makeStyles((theme)=>({
    footerText:{
        fontFamily:'nunito',
        fontSize:'1 rem',
        fontSize:'1.5 rem',
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
       <h3 className={classes.footerText}>Powered by ideaNext<span>&#174;</span>Projects</h3>
       <h3 className={classes.footerText}>Copyright <span>&#169;</span> 2022 ideaNext<span>&#174;</span> Projects</h3>
      </div>
  );
}