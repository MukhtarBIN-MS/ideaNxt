import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  import success from "../Images/successful.png";

const useStyles = makeStyles((theme) => ({
    popUpbox:{
        position:'fixed',
        background:'none',
        width:'100%',
        height:'100vh',
        top:'0',
        left:'0'
    },
    box:{
        position:'relative',
        width:'70%',
        margin: '0 auto',
        maxHeight:'70vh',
        marginTop:'calc(100vh - 85vh - 20px)',
        background:'#fff',
        borderRadius:'7px',
        pading:'20px',
        border:'1px solid black',
        overflow:'auto'
    },
    icon:{
        content:'x',
        cursor:'pointer',
        position:'fixed',
        right:'calc(15% - 10px)',
        top:'calc(100vh - 85vh - 33px)',
        background:'#ededed',
        width:'25px',
        height:'25px',
        borderRadius:'50%',
        lineHeight:'20px',
        textAlign:'center',
        border:'1px solid #999',
        fontSize:'20px'
    },
    text:{
        fontFamily:'nunito',
        textAlign:'center'
    },
    image:{
        widht:'70px',
        height:'70px'
    },
    btn:{
        background:'green',
        color:'snow',
        width:'50px',
        margin:'10px'
    }

}))


export default function PopUp(){

    const [isOpen, setIsOpen] = useState(false);
    const hanldeClose = ()=>{
        setIsOpen(!isOpen);
    }
    const classes = useStyles();
    return(
        
        <div className={classes.popUpbox}>
            <div className={classes.box}>
                
               <center><img src={success} className={classes.image}/></center> 
                <h5 className={classes.text}>Congratulations You have successfully register for Abuja Innovation fair</h5>
                <center><Link to="/"><button className={classes.btn}>Ok
                     </button></Link></center>
            </div>
        </div>


    )
}