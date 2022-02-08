import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Radio from '@mui/material/Radio';
import InputLabel from "@mui/material/InputLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Footer from './Footer';

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
    marginBottom: "10px",
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
    marginBottom:'10px'
  },
  button: {
    width: "100px",
 
    marginTop:'30px',
    alignItems: "center",
    justifyContent: "center",
  },
  form:{
    marginBottom:'15px'
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
              <label className={classes.textLabel}>Company Name</label>
              <TextField
                id="outlined-basic"
                label="(optional)"
                placeholder="(optional)"
                type="text"
                onChange={handleInputChange}
                InputProps={{
                  className: classes.textInput,
                }}
               
                variant="outlined"
              />
            </div>
            <div className={classes.labelAlign}>
              <label className={classes.textLabel}>Address</label>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="(optional)"
                onChange={handleInputChange}
                className={classes.textInput}
                
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
              <label className={classes.textLabel}>Section To Attend</label>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={handleInputChange}
                className={classes.textInput}
                variant="outlined"
                defaultValue="select"
              >
                <MenuItem value="Trade and Investment Innovation Town Hall">
                  Trade and Investment Innovation Town Hall
                </MenuItem>
                <MenuItem value=" Al and Robotics Town Hall">
                  {" "}
                  Al and Robotics Town Hall
                </MenuItem>
                <MenuItem value="Electric Vehicle Innovation Town Hall">
                  Electric Vehicle Innovation Town Hall
                </MenuItem>
                <MenuItem value="Innovation Hubs' Forum">
                  Innovation Hubs' Forum
                </MenuItem>
                <MenuItem value="Disruptive Starup Forum">
                  Disruptive Starup Forum
                </MenuItem>
                <MenuItem value=" Telecoms and 5G Technologies Forum">
                  {" "}
                  Telecoms and 5G Technologies Forum
                </MenuItem>
                <MenuItem value="Broadband Communication Forum">
                  Broadband Communication Forum
                </MenuItem>
                <MenuItem value="Semiconductor and Chipmaking Forum">
                  Semiconductor and Chipmaking Forum
                </MenuItem>
                <MenuItem value="Drone Technology Forum">
                  Drone Technology Forum
                </MenuItem>
                <MenuItem value="Satellite Internet Communication Forum">
                  Satellite Internet Communication Forum
                </MenuItem>
                <MenuItem value=" Renewable and Clean Energy Forum">
                  {" "}
                  Renewable and Clean Energy Forum
                </MenuItem>
                <MenuItem value=" SmartAgriTech Forum">
                  {" "}
                  SmartAgriTech Forum
                </MenuItem>
                <MenuItem value="AR & VR Forum">
                  {" "}
                  Renewable and Clean Energy Forum
                </MenuItem>
              </Select>
            </div>
            <div className={classes.labelAlign}>
            <label className={classes.textLabel}>Attend Event In ?</label>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="In person"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="In person"
                  control={<Radio />}
                  label="In person"
                />
                <FormControlLabel
                  value="Virtual"
                  control={<Radio />}
                  label="Virtual"
                />
               
              </RadioGroup>
            </div>

            <center>
              <Button
                type="submit"
                className={classes.button}
                variant="contained"
                color="success"
              >
                Register
              </Button>
            </center>
          </div>
        </form>
      </div>
      <hr/>
      <Footer/>
    </React.Fragment>
  );
}
