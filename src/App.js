import React from "react";
import { cssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import cover from "./Images/cover.png";
import Header from "./components/Header";
import EventTitle from "./components/EventTitle";
import EventShedule from "./components/EventShedule";
import EventDetail from "./components/EventDetail";
import Footer from "./components/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${cover})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    '@media screen and (max-width:480px)':{
      backgroundSize: "cover",
      minHeight: "70vh",
    },
    '@media screen and (max-width:767px)':{
      minHeight: "80vh",
    },
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
        <br></br>
        <br></br>
        <EventDetail />
        
        <Footer />
      </div>
    </React.Fragment>
  );
}
