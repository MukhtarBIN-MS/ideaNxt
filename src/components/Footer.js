import * as React from "react";
import { makeStyles } from '@material-ui/styles';



const useStyles = makeStyles((theme)=>({
    footerText1:{
        fontFamily:'nunito',
        fontSize:'20px',
        textAlign:'center',
        textAlign:'left',
        marginLeft:'10px'
    },
    footerText2:{
        marginLeft:'10px',
        marginRight:'10px',
        marginTop:'-7px',
        color:'#333'
       
    },
    footerText:{
        textAlign:'center',
        fontFamily:'nunito'
    },
    footerr:{
        backgroundColor:'#040720',
        color:'snow',
        borderTop:'1px solid grey'
    },
    infoSide:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        marginLeft:'10px',
        marginRight:'10px',
        '@media screen and (max-width:480px)':{
            display:'flex',
            flexDirection:'column'
        }
    },
    colums:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        paddingRight:'40px',
        
    },
    links:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        marginTop:'-13px'
    },
    tetx:{
        textAlign:'center',
        fontFamily:'nunito'
    },
    icons:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        margin:'10px'
      
    },
    footerLink:{
        textDecoration:'none',
        color:'red',
        fontFamily:'nunito',
        paddingBottom:'1px'
    },
    iconI:{}
 
 }))

export default function Footer() {
    const classes = useStyles();
  return (
    <div className="footerr">
     
       <p className={classes.footerText1}>About Us</p>
       <p className={classes.footerText2}>Abuja Innovation Fair Seeks to bring together startups,
              multinationals, investors, incubators universities and
              polytechnics, research institutes, government agencies from
              Nigeria and overseas participating the conferences</p>
       <div className={classes.links}>
       <div className={classes.colums}>
           <h4>Resources</h4>
          <span><a className={classes.footerLink} href="#">About</a></span> 
           <span><a className={classes.footerLink}   href="#">Contact</a></span>
       </div>
       <div className={classes.colums}>
           <h4>Legal</h4>
           <a className={classes.footerLink} href="#">Terms</a>
           <a className={classes.footerLink} href="#">Privacy</a>
       </div>
       <div className={classes.colums}>
           <h4>Visit</h4>
           <a className={classes.footerLink}  href="#">Contact</a>
           <a className={classes.footerLink}  href="#">Mail Us</a>
       </div>
       </div>
       <div className={classes.socialM}>
         <h4 className={classes.tetx}>Stay Connected</h4>
         <div className={classes.icons}>
           <i className={classes.iconI} class='fa fa-facebook-square' aria-hidden="true"></i>
           <i className={classes.iconI} class="fa fa-instagram" style={{color:'black'}} ></i>
           <i className={classes.iconI} class="fa fa-twitter-square"></i>
           <i className={classes.iconI} class="fa fa-linkedin-square"></i>
        </div>
       </div>
       <p className={classes.footerText}>Copyright<span>&#169;</span> Nationwide Integrated Software Solutions Consults 2022 </p>
      </div>
  );
}