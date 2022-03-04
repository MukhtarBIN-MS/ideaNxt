import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Button from "@mui/material/Button";

const useStyles = makeStyles((theme) => ({
        container:{
            borderRadius: "10px",
            marginTop: "20px",
            marginBottom:'20px',
            marginLeft: "10px",
            marginRight: "10px",
            paddingLeft: "10px",
            paddingBottom:'20px',
            paddingRight: "10px",
            border: "1px solid lightgrey",
            background: "#F2F3F5",
            fontSize: "20px",
            width: "auto 0",
            
        },
        textCenter:{
            width:'100%',
            fontFamily:'nunito',
            textAlign:'center',
            borderBottom:'1px solid #000',
            lineHeight:'0.1rem',
            margin:'10px 0px 20px',
        },
        stextcenter:{
            background:'#F2F3F5',
            padding:'0 10px'
        },  textInput: {
            width: "250px",
            height: "40px",
            borderRadius: "7px",
            background: "snow",
            color: "black",
            marginBottom: "10px",
            marginTop: "10px",
          },
          button: {
            width: "130px",
            marginTop: "30px",
           
            alignItems: "center",
            justifyContent: "center",
          },
          description:{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                marginTop:'-20px'

          },
          title:{
              textAlign:'center',
              fontFamily:'nunito',
            
          },
          sub_title:{
              textAlign:'center',
              fontFamily:'nunito'
          },
         desc:{
             textAlign:'center',
             marginTop:'-10px'
         },
         pdesc:{
             fontSize:'15px',
             fontFamily:'nunito',
             textAlign:'center'
         },
         red:{
             color:'red',
             fontFamily:'nunito',
             fontSize:'15px',
             textAlign:'center'
         }


}))

export default function Space5(){
    const classes = useStyles();
  return(
      <div className={classes.container}>
          <h4 className={classes.title}>SPACE FOR INDOOR SHELL SCHEME STANDS</h4>
          <h5 className={classes.sub_title}>the above space will be reserved for does interested in indoor scheme stands</h5>
          <div className={classes.description}>
              <p className={classes.p}>Quantity:</p>
              <p className={classes.p}> 9sqm</p>
          </div>
              <div>
             <p className={classes.desc}><u>Description</u></p>
              <p className={classes.pdesc}>payment covers 1 table, 2 chairs, 1 spot light, power point and fascial</p>
              </div><br/>
          
              <h4 className={classes.textCenter}><span className={classes.stextcenter}>CART TOTALS</span></h4>
              <center>
                  <h5>&#8358;1,440,000</h5>
              
              <Button
                type="submit"
                className={classes.button}
                variant="contained"
                color="success"
              >
                Pay now
              </Button>
            </center>
      </div>

  )

}
