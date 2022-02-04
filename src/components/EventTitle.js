import React, { useState } from "react";
import ReadMoreReact from 'read-more-react';
import { makeStyles } from "@material-ui/styles";
import Grid from "@mui/material/Grid";
import sidepic from "../Images/sidepic.jpg";
import logo from "../Images/logo.png";
import meet from "../Images/meet.png";
import ind1 from "../Images/ind.png";
import ind2 from "../Images/ind2.png";




const useStyles = makeStyles((theme) => ({
  eventside: {
    alignItems: "center",
    justifyContent: "center",
  },
  eventTitle: {
    fontFamily: "Russo One",

    fontSize: "1 rem",
    textAlign: "center",
    "@media screen and (max-width:480px)": {
      fontSize: "20px",
      paddingLeft: "10px",
      textAlign: "center",
    },
  },
  eventsTitle: {
    fontFamily: "Russo one",
    color: "#000080",
    fontSize: "17px",
    textAlign: "center",
    "@media screen and (max-width:480px)": {
      
      paddingLeft: "10px",
      textAlign: "center",
    },
  },
  list: {
    listStyle: "none",
    fontFamily: "nunito",
  },
  contentw11: {
    fontFamily: "nunito",
    fontSize: "17px",
    textAlign:'justify',
    wordSpacing:'-2px',
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  contentw1: {
    textAlign: "justify",
    wordSpacing: "auto",
    fontFamily: "nunito",
    fontSize: "17px",
    color: "#CICIC1",
    paddingLeft: "15px",
    paddingRight: "10px",
  },
  contentWrapper1: {
    background: "white",
    display: "flex",
    flexDirection: "row",
    background: "none",
    color: "#333",
   
    fontSize: "1 rem",
    marginBottom: "5px",
    "@media screen and (max-width)": {
      border: "none",
      borderRadius: "none",
    },

    Title: {
      background: "#ACADA8",
    },
  },
  contentWrapper2: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
  },
  contentWrapper3: {
    borderRadius: "10px",
    marginTop: "20px",
    marginLeft: "20px",
    marginRight: "10px",
    paddingLeft: "10px",
    paddingRight: "10px",
    border: "1px solid lightgrey",
    background: "#CCCDC6",
    background: "none",
    fontSize: "20px",
    width: "auto 0",
  },
  contentWrapper4: {
    borderRadius: "10px",
    marginTop: "20px",
    marginLeft: "20px",
    marginRight: "10px",
    paddingLeft: "10px",
    paddingRight: "10px",
    border: "1px solid lightgrey",
    background: "#CCCDC6",
    background: "none",
    fontSize: "20px",
    width: "auto 0",
   
  },
  contentWrapper5: {
    marginTop: "20px",
    marginLeft: "20px",
    marginRight: "10px",
    paddingLeft: "10px",
    paddingRight: "10px",
    background: "#CCCDC6",
    background: "none",
    fontSize: "20px",
    width: "auto 0",
    paddingLeft: "10px",
    '@media screen and (max-width:480px)':{
      borderRadius: "10px",
      border: "1px solid lightgrey",
    }
  },
  contentWrapper6: {
    borderRadius: "10px",
    marginTop: "20px",
    marginLeft: "20px",
    marginRight: "10px",
    paddingLeft: "10px",
    paddingRight: "10px",
    border: "1px solid lightgrey",
    background: "#CCCDC6",
    background: "none",
    fontSize: "20px",
    width: "auto 0",
    paddingLeft: "10px",
  },
  contentWrapper7: {
    borderRadius: "10px",
    marginTop: "20px",
    marginLeft: "20px",
    marginRight: "10px",
    border: "1px solid lightgrey",
    background: "#CCCDC6",
    background: "none",
    fontSize: "20px",
    width: "auto 0",
    paddingLeft: "10px",
  },

  all: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
  },
  htitle: {
    padding: "10px",
    fontSize: "17px",
    textAlign: "center",
    fontFamily: "Russo one",
    color: "#333",
  },
  image: {
    objectFit: "cover",
    alignItems: "center",
    justifyContent: "center",
    width: "700px",
    height: "700px",
    "@media screen and (max-width:480px)": {
      display: "none",
    },
    "@media screen and (max-width:767px)": {
      display: "none",
    },
  },
  images: {
    alignItems: "center",
    width: "300px",
    height: "300px",
    "@media screen and (max-width:480px)": {
      alignItems: "center",
      justifyContent: "center",
      paddingLeft: "35px",
    },
  },
  dimage: {
    display: "block",
    alignItems: "center",
    justifyContent: "center",
    width: "300px",
    height: "300px",
  },
}));

export default function EventTitle() {
 
  const classes = useStyles();

  return (
    <div className={classes.Title}>
      <div className={classes.eventside}>
        <h1 className={classes.eventTitle}>
          2022 Abuja Innovation Fair and Conference
        </h1>

        <h4 className={classes.eventsTitle}>
          Exploring opportunities at the convergence of Innovations, Business
          and Technologies
        </h4>

        <div container className={classes.contentWrapper1}>
          <Grid item xs={12} lg={6}>
           
            <p className={classes.contentw11}>
              Welcome to the Maiden Edition of Abuja Innovation Fair, a leading
              innovation event in Nigeria. Abuja Expo@ will be held at
              internation conference center, Abuja and Nile University of
              Nigeria from March 15-17. Hosted Nile University of Nigeria, and
              organized by Nationwide Integrated Software Solutions Consults,
              APmultimedia, and Primost International Limited. In this maiden
              edition, we are focusing on the ‌innovating companies and startups
              (both in Nigeria and overseas), from real estate developers
              creating high-quality affordable housing, to those building
              cheaper renewable energy technologies, and those connecting our
              world through 5G network and Broadband Satellite internet
              communications, to those in the automobile industries building
              electric cars to mention but a few. The main goal of Abuja Expo is
              to accelerate innovation-driven enterprises across the key sectors
              of Nigerian Economy. Highlights of this maiden edition include
              Innovation-driven Enterprise Summit, and town hall meetings (for
              online and on-site), and an exhibition to promote innovative
              products to potential buyers, distributors, investors and
              collaborators. The key areas of interest are: Real Estate
              Development, Industrial Design/Digital fabrication, digital
              economy, automotive design, Renewable Energy and Green
              Technologies, eCommerce Development, 5G Deployment and Broadband
              Satellite Internet connectivity, High Quality consumer goods and
              services, Radar and photonics Technologies for aerospace
              applications and telecommunications, Digital Tax Administration.
              With your support, we can accelerate innovation-driven enterprises
              for national economic recovery, growth and transformation. We look
              forward to seeing you in March and to showcase innovations shaping
              our world!
            </p>
           
          </Grid>
          <Grid item lg={6}>
            <img src={sidepic} className={classes.image} alt="image" />
          </Grid>
        </div>
      </div>
      <div id="eInfo" className={classes.all}>
        <div className={classes.contentWrapper2}>
          <img src={sidepic} className={classes.dimage} alt="image" />
          <p className={classes.contentw1}>
            2022 Abuja Expo (aka Abuja Innovation Fair 1.0) focuses on the
            ‌innovating companies and startups that are confronting the
            challenges posed by Covid-19. These challenges, both existential and
            practical, have pushed these companies to innovate, thrive and
            remake their businesses. Thus, paving the way for others to follow.
            From real estate developer, creating high-quality affordable
            housing, to those building affordable and cheap renewable energy
            technology, automobiles, smart agricTech to those building
            innovative solutions for internet access using 5G and Broadband
            Satellite Technologies. These companies address a society that is
            remade by the COVID-19 pandemic and are pioneering business models
            that are now accelerating innovation-driven enterprise.
          </p>
        </div>
        <Grid
          className={classes.container}
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 6, md: 12 }}
        >
          <Grid xs={4} className={classes.contentWrapper3}>
            <h2 className={classes.htitle}>
              Nigerian Innovation-Driven Enterprise Summit Nigerian Universities
              Innovation Forum
            </h2>
            <p className={classes.contentw1}>
              Innovation Town Hall Meetings The town hall meeting will feature a
              wide range of topics that include: Digital Tax Administration
              (using tech innovation to drive Digital Tax collection and
              remittance) 5G and Brodband Satellite Communications,
              Semiconductor Technology and Chipmaking, Automotive Tech, Real
              Estate Development, Smart AgricTech, Drone Technology (for
              disaster monitoring and management), Farmland Security
              Technologies, Renewable Energy Technologies, environmental tech
              and fintech.
            </p>
          </Grid>
          <Grid xs={3} className={classes.contentWrapper4}>
            <h2 className={classes.htitle}>
              Pitching <i class="fa fa-microphone" aria-hidden="true"></i>
            </h2>
            <p className={classes.contentw1}>
              This fair provides the platform showcase your innovative ideas,
              products and services. It will also feature pitches from creative
              exhibitors working on unique solutions. Attendees will have the
              opportunity to network with industry experts, Investors, potential
              partners, distributors and agents, startup founders among others.
            </p>
          </Grid>
          <Grid xs={3} className={classes.contentWrapper4}>
            <h2 className={classes.htitle}>
              Networking & Collaboration{" "}
              <i
                class="fa fa-handshake-o"
                style={{ color: "#333" }}
                aria-hidden="true"
              ></i>
            </h2>
            <p className={classes.contentw1}>
              The main goals of this event are to foster industrial R&D
              collaboration, explore business opportunities at the intersection
              innovation and technology, streamline technology exchange and
              transfer across various vertical, and promote innovation-driven
              enterprises for national economic recovery.
            </p>
            <Grid item xs={4}>
              <img src={meet} className={classes.images} alt="image" />
            </Grid>
          </Grid>

          <Grid xs={6} className={classes.contentWrapper5}>
            <h2 className={classes.htitle}>
              Showcasing <i class="fa fa-globe" aria-hidden="true"></i>
            </h2>
            <p className={classes.contentw1}>
              New Product Exhibition Launching new products and services
              requires branding, visibility, promotional campaigns and the right
              network. This is an opportunity to interact with your potential
              clients, investor and partners. This also provide first-hand
              information and feedback on what your target audience are looking
              for in your products and services. Some of the captivated audience
              may want to test feel your new products and services! Innovation
              Contest Seize this rare opportunity to compete with other
              exhibitors and stand a chance of winning the coveted IdeaNexT
              Academy Awards for best Innovation shaping our world. Various
              sub-awards endorsed by industry experts will give prestige to your
              business and team.
            </p>
            <Grid item xs={4}>
            <img src={ind2} className={classes.images} alt="image" />
          </Grid>
            <Grid item xs={4}>
            <img src={ind1} className={classes.images} alt="image" />
          </Grid>
          
          </Grid>
         
          <Grid xs={4} className={classes.contentWrapper7}>
            <h2 className={classes.htitle}>
              Vision <i class="fa fa-eye" aria-hidden="true"></i>
            </h2>
            <p className={classes.contentw1}>
              2022 Abuja Innovation Fair Seeks to bring together startups,
              multinationals, investors, incubators universities and
              polytechnics, research institutes, government agencies from
              Nigeria and overseas participating the conferences, summits, town
              hall meetings, startup pitching sessions, create a platform for
              networking among industries, corporations, academia, and startup
              ecosystems, and government.
            </p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
