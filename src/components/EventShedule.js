import React from "react";
import { makeStyles } from "@material-ui/styles";
import calendar from "../Images/calend.jpg";
import org from "../Images/organiser.jpg";
import location from "../Images/eplace.png";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "@media screen and (max-width:840px)": {
      flexDirection: "column",
      display: "flex",
    },
  },
  contain: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "@media screen and (max-width:840px)": {
      flexDirection: "column",
      display: "flex",
    },
  },
  sdl: {
    display: "flex",
    flexDirection: "column",
    fontFamily:'nunito',
    fontSize:'1.5 rem'
  },
  image: {
    paddingLeft:'10px',
    width: "130px",
    height: "130px",
  },
  eventText: {
    fontFamily: "nunito",
    fontSize: "1 rem",
    paddingLeft:'10px'
  },
  eventText1: {
    fontSize: "1 rem",
    fontFamily: "nunito",
    paddingLeft:'10px'
  },
}));

export default function EventShedule() {
  const classes = useStyles();
  return (
    <div>
      <Grid
        className={classes.container}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={4} className={classes.contain}>
          <img src={calendar} className={classes.image} alt="image" />
          <div className={classes.sdl}>
            <h4 className={classes.eventText1}>When</h4>
            <br></br>
            <p className={classes.eventText}>
              Wednesday, Tuesday 8 2021 to<br></br>
              Thursday 10 March, 2022 (GMT +1)
            </p>
          </div>
        </Grid>

        <Grid item xs={4} className={classes.contain}>
          <img src={location} className={classes.image} />
          <div className={classes.sdl}>
            <h4 className={classes.eventText1}>Where</h4>
            <br></br>
            <p className={classes.eventText}>
              Nile University & International<br></br>
              Conference center
            </p>
          </div>
        </Grid>

        <Grid item xs={4} className={classes.contain}>
          <img src={org} className={classes.image} />
          <div className={classes.sdl}>
            <h4 className={classes.eventText1}>Organizer</h4>
            <br></br>
            <p className={classes.eventText}>
              APMultimedia<br></br>
              Host: Nile University<br></br>
              Contact Organizer +234 7025366998
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
