import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Nile from '../Images/nle.jpg';
import part1 from '../Images/part1.jpg';
import Grid from "@mui/material/Grid";

const useStyles = makeStyles((theme) => ({
    scontainer:{
        display:'flex',
        flexDirection:'row',
        '@media screen and (max-width:480px)':{
            flexDirection:'column'
        }
    },
     image:{
        objectFit: "contain",
        width: "200px",
        height: "200px",
        marginLeft:'10px',
        paddingRight:'50px',
      '@media screen and (max-width:480px)':{
        width: "200px",
        height: "200px",
        alignItems:'center',
        justifyContent:'center',
        marginLeft: "90px",
        
      },
    },
      text:{
          fontFamily:'nunito',
          textAlign:'center'
      },
      dimages:{
          width:'150px',
          height:'100px',
          marginLeft:'10px'
      }


}))

export default function Organize(){
    const classes = useStyles();

    return(
        <div className={classes.container}>
              <div className={classes.scontainer}>
                  <div className={classes.part1}>
                  <h3 className={classes.text}>Hosted By</h3>
                  <img src={Nile} alt="nile_pic" className={classes.image}/>
                  </div>
                  <div className={classes.part2}>
                  <h3 className={classes.text}>Organised By</h3>
                  <img src={Nile} alt="nile_pic" className={classes.image}/>
                  </div>
              </div>

              
              <h3 className={classes.text}>Partners</h3>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} className={classes.partners}>
                <Grid item xs={2} sm={4} md={4}>
                    <img src={part1} className={classes.dimages}/>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <img src={Nile} className={classes.dimages}/>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <img src={Nile} className={classes.dimages}/>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <img src={Nile} className={classes.dimages}/>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <img src={Nile} className={classes.dimages}/>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <img src={Nile} className={classes.dimages}/>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <img src={Nile} className={classes.dimages}/>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <img src={Nile} className={classes.dimages}/>
                </Grid>
              </Grid>
              </div>
    )
}