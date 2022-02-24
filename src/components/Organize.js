import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Nile from '../Images/nle.jpg';
import Nissc from '../Images/nissc.png';
import part1 from '../Images/part1.jpg';
import Grid from "@mui/material/Grid";

const useStyles = makeStyles((theme) => ({
    scontainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        '@media screen and (max-width:480px)':{
            flexDirection:'column'
        }
    },
     image:{
        objectFit: "contain",
        width: "200px",
        height: "200px",
        marginLeft:'10px',
        borderRadius:'50px',

      '@media screen and (max-width:480px)':{
        width: "200px",
        height: "200px",
        alignItems:'center',
        justifyContent:'center',
        marginLeft: "70px",
        
      },
    },
    ddimage:{
        objectFit: "contain",
        width: "250px",
        height: "250px",
        marginLeft:'10px',
        borderRadius:'50px',

      '@media screen and (max-width:480px)':{
        width: "300px",
        height: "300px",
        alignItems:'center',
        justifyContent:'center',
        marginLeft: "20px",
        
      },
    },
      text:{
          fontFamily:'nunito',
          textAlign:'center'
      },


      dimages:{
          width:'150px',
          height:'100px',
          marginLeft:'10px',
          borderRadius:'10px'
      },
      
      container:{
          marginBottom:'21px',

      },
      part1:{
        display:'flex',
        flexDirection:'column'
      },
      arrow:{
        fontSize:'20px'
      }
    

}))

export default function Organize(){
    const classes = useStyles();

    return(
        <div data-aos="fade-right" className={classes.container}>
              <div className={classes.scontainer}>
                  <div className={classes.part1}>
                  <h3 className={classes.text}>Hosted By <span className={classes.arrow}>&#xbb;</span></h3>
                  <img src={Nile} alt="nile_pic" className={classes.image}/>
                  </div>
                  <div className={classes.part2}>
                  <h3 className={classes.text}>Organised By <span className={classes.arrow}>&#xbb;</span></h3>
                  <img src={Nissc} alt="nile_pic" className={classes.ddimage}/>
                  </div>
              </div>

              <div data-aos="fade-left">
              <h3 className={classes.text}>Partners</h3>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} className={classes.partners}>
                <Grid item xs={2} sm={4} md={4}>
                    <img src={part1} className={classes.dimages}/>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <img src={Nile} className={classes.dimages}/>
                </Grid>
              </Grid>
              </div>
              </div>
    )
}