import React from "react";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import cover from "./Images/cover.png";
import Header from "./components/Header";
import EventTitle from "./components/EventTitle";
import EventShedule from "./components/EventShedule";
import EventDetail from "./components/EventDetail";
import Register from './components/Register'
import Footer from "./components/Footer";
import Organize from './components/Organize';


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
        <CssBaseline />
        <Header/>
      </div>
      <div className={classes.container}>
        <EventTitle />
        <Organize/>
        <EventShedule />
        <Register/>
        <br></br>
        <br></br>
    
        <EventDetail />
        
        <Footer />
      </div>
    </React.Fragment>
  );
}
