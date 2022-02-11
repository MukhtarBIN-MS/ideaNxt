import React, { useRef, useState } from "react";
import axios from "axios";
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
import DatePicker from "react-datepicker";
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
  const Fname = useRef();
  const Lname = useRef();
  const Email = useRef();
  const address = useRef();
  const cpname = useRef();
  const contact = useRef();
  const section = useRef();
  const attend = useRef();
  const designation = useRef();
  const deptm = useRef();
  const daob = useRef();


  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [eml, setEml] = useState("");
  const [add, setAdd] = useState();
  const [Cp_name, setCpname] = useState("");
  const [con_tact, setContact] = useState("");
  const [sec_tion, setSection] = useState("");
  const [att_end, setAttend] = useState("");
  const [desi, setDesig] = useState("");
  const [dept, setDept] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = async (e) =>{
    e.preventDefault();

  }


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
                ref={Fname}
                value={fname}
                placeholder="Firstname"
                type="text"
                onChange={(e) => setFname(e.target.value)}
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
                ref={Lname}
                value={lname}
                placeholder="Last name"
                type="text"
                onChange={(e) => setLname(e.target.value)}
                InputProps={{
                  className: classes.textInput,
                }}
                required
                variant="outlined"
              />
            </div>
           
            <div className={classes.labelAlign}>
              <label className={classes.textLabel}>Institution/Affliation/Company</label>
              <TextField
                id="outlined-basic"
                label="(optional)"
                placeholder="(optional)"
                type="text"
                ref={cpname}
                value={Cp_name}
                onChange={(e) => setCpname(e.target.value)}
                InputProps={{
                  className: classes.textInput,
                }}
               
                variant="outlined"
              />
            </div>
            <div className={classes.labelAlign}>
              <label className={classes.textLabel}>Designation</label>
              <TextField
                id="outlined-basic"
                label="deignation"
                placeholder="deisgnation"
                ref={designation}
                value={desi}
                placeholder="designation"
                onChange={(e) => setDesig(e.target.value)}
                InputProps={{
                  className: classes.textInput,
                }}
                
                variant="outlined"
              />
            </div>
            <div className={classes.labelAlign}>
              <label className={classes.textLabel}>Dept/Unit</label>
              <TextField
                id="outlined-basic"
                label="dept/unit"
                placeholder="dept/unit"
                ref={deptm}
                value={dept}
                placeholder="dept/unit"
                onChange={(e) => setDept(e.target.value)}
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
                ref={address}
                value={add}
                placeholder="address"
                onChange={(e) => setAdd(e.target.value)}
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
                ref={Email}
                value={eml}
                onChange={(e) => setEml(e.target.value)}
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
                ref={contact}
                value={con_tact}
                onChange={(e) => setContact(e.target.value)}
                InputProps={{
                  className: classes.textInput,
                }}
                required
                variant="outlined"
              />
            </div>
       

            <div className={classes.labelAlign}>
              <label className={classes.textLabel}>Area of Interset</label>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                ref={section}
                value={sec_tion}
                onChange={(e) => setSection(e.target.value)}
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
                value={att_end}
                ref={attend}
                onChange={(e) => setAttend(e.target.value)}
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
