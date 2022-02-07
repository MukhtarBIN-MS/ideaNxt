import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const useStyles = makeStyles((theme) => ({
  Rcontainer: {
    border: "1px solid grey",
    padding: "5px",
    background: "#000080",
  },
  title: {
    fontFamily: "Russo one",
    textAlign: "center",
    fontSize: "2 rem",
    color: "#F2F3F5",
  },
  textLabel: {
    marginBottom: "5px",
    marginTop: "10px",
    fontFamily: "nunito",
  },
  textInput: {
    width: "250px",
    height: "40px",
    marginBottom: "10px",
    marginTop: "10px",
  },
  textInputContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "10px",
  },
  labelAlign: {
    display: "flex",
    flexDirection: "column",
  },
  button:{
    width:'100px',
    alignItems:'center',
    justifyContent:'center'
  }
}));

export default function Form() {
  const [state, setState] = useState();
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
  };
  const handleInputChange = (evt) => {
    const name = evt.target.name;
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setState({
      ...state,
      [name]: value,
    });
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.Rcontainer}>
        <h2 className={classes.title}>Register to Attend</h2>
      </div>
      <div className={classes.form}>
        <form onSubmit={handleSubmit}>
          <div className={classes.textInputContainer}>
            <div className={classes.labelAlign}>
              <label className={classes.textLabel}>First Name</label>
              <TextField
                id="outlined-basic"
                label="firstname"
                placeholder="Firstname"
                type="text"
                onChange={handleInputChange}
                InputProps={{
                  className: classes.textInput,
                }}
                required
                variant="outlined"
              />
            </div>
            <div className={classes.labelAlign}>
              <label className={classes.textLabel}>Last Name</label>
              <TextField
                id="outlined-basic"
                label="lastname"
                placeholder="Last name"
                type="text"
                onChange={handleInputChange}
                InputProps={{
                  className: classes.textInput,
                }}
                required
                variant="outlined"
              />
            </div>
            <div className={classes.labelAlign}>
              <label className={classes.textLabel}>Email</label>
              <TextField
                id="outlined-basic"
                label="Email"
                placeholder="Email"
                type="email"
                onChange={handleInputChange}
                InputProps={{
                  className: classes.textInput,
                }}
                required
                variant="outlined"
              />
            </div>
            <div className={classes.labelAlign}>
              <label className={classes.textLabel}>Phone number</label>
              <TextField
                id="outlined-basic"
                label="contact"
                type="number"
                onChange={handleInputChange}
                InputProps={{
                  className: classes.textInput,
                }}
                required
                variant="outlined"
              />
            </div>
            <div className={classes.labelAlign}>
              <label className={classes.textLabel}>
                WhatsApp number (if different)
              </label>
              <TextField
                id="outlined-basic"
                label="contact"
                type="number"
                onChange={handleInputChange}
                InputProps={{
                  className: classes.textInput,
                }}
                variant="outlined"
              />
            </div>
            <div className={classes.labelAlign}>
              <label className={classes.textLabel}>Section To Attend</label>
              <select className={classes.textInput}>
                <option value="Trade and Investment Innovation Town Hall">Trade and Investment Innovation Town Hall</option>
                <option value="Al and Robotics Town Hall">Al and Robotics Town Hall</option>
                <option selected value=" Electric Vehicle Innovation Town Hall"> Electric Vehicle Innovation Town Hall</option>
                <option value="Innovation Hubs' Forum">Innovation Hubs' Forum</option>
                <option value="Disruptive Starup Forum">Disruptive Starup Forum</option>
                <option value="Digital Tax Forum">Digital Tax Forum</option>
                <option value="Telecoms and 5G Technologies Forum">Telecoms and 5G Technologies Forum</option>
                <option value="Broadband  Communication Forum">Broadband  Communication Forum</option>
                <option value="SmartAgriTech Forum">SmartAgriTech Forum</option>
                <option value="Semiconductor and Chipmaking Forum">Semiconductor and Chipmaking Forum</option>
                <option value="Drone Technology Forum">Drone Technology Forum</option>
                <option value="Satellite Internet Communication Forum">Satellite Internet Communication Forum</option>
                <option value="Renewable and Clean Energy Forum"> Renewable and Clean Energy Forum</option>
                <option value="AR & VR Forum"> AR & VR Forum</option>
              </select>
            </div>

           <center><Button
              type="submit"
              className={classes.button}
              variant="contained"
              color="success"
            >
              Register
            </Button></center> 
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}
