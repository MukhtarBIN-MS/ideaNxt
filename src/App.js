import React from "react";
import { cssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import cover from "./Images/cover.png";
import Header from "./components/Header";
import EventTitle from "./components/EventTitle";
import EventShedule from "./components/EventShedule";
import EventDetail from "./components/EventDetail";
import Register from './components/Register'
import Footer from "./components/Footer";


const useStyles = makeStyles((theme) => ({
  root: {
    height:'700px',
    backgroundImage: `url(${cover})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    '@media screen and (max-width:480px)':{
      backgroundSize:'cover',  
    }
      
  },
  container: {
    justifyContent: "space-between",
    maxwidth: "400px",
    margin: "0 auto",
    padding: "10px 0",
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <cssBaseline />
        <Header/>
      </div>
      <div className={classes.container}>
        <EventTitle />
        <EventShedule />
        <div id="reg">
        <Register/>
        </div>
        <br></br>
        <br></br>
    
        <EventDetail />
        
        <Footer />
      </div>
    </React.Fragment>
  );
}
