import React, { useRef, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import InputLabel from "@mui/material/InputLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { countries } from "./Countries";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import Footer from "./Footer";

//List of countries to populate in Autofill select

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
    borderRadius: "7px",
    background: "snow",
    color: "black",
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
    marginBottom: "10px",
  },
  button: {
    width: "100px",

    marginTop: "30px",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    marginBottom: "15px",
  },
  nitext: {
    fontFamily: "nunito",
    padding: "5px",
  },
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
  const contr = useRef();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [eml, setEml] = useState("");
  const [add, setAdd] = useState("");
  const [Cp_name, setCpname] = useState("");
  const [con_tact, setContact] = useState("");
  const [sec_tion, setSection] = useState("");
  const [att_end, setAttend] = useState("");
  const [desi, setDesig] = useState("");
  const [dept, setDept] = useState("");
  const [cont, setCont] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      Fname: Fname.current.value,
      Lname: Lname.current.value,
      Email: Email.current.value,
      address: address.current.value,
      cpname: cpname.current.value,
      contact: contact.current.value,
      section: section.current.value,
      attend: attend.current.value,
      designation: designation.current.value,
      deptm: deptm.current.value,
      contr: contr.current.value,
    };
    try {
      await console.log(data);
    } catch (err) {
      console.log(err);
    }
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
              <label className={classes.textLabel}>First Name:</label>
              <input
                id="outlined-basic"
                label="firstname"
                ref={Fname}
                value={fname}
                placeholder="Firstname"
                type="text"
                onChange={(e) => setFname(e.target.value)}
                className={classes.textInput}
                required
                variant="outlined"
              />
            </div>
            <div className={classes.labelAlign}>
              <label className={classes.textLabel}>Last Name:</label>
              <input
                id="outlined-basic"
                label="lastname"
                ref={Lname}
                value={lname}
                placeholder="Last name"
                type="text"
                onChange={(e) => setLname(e.target.value)}
                className={classes.textInput}
                required
                variant="outlined"
              />
            </div>

            <div className={classes.labelAlign}>
              <label className={classes.textLabel}>Phone number:</label>
              <input
                id="outlined-basic"
                label="contact"
                type="number"
                ref={contact}
                value={con_tact}
                onChange={(e) => setContact(e.target.value)}
                className={classes.textInput}
                required
                variant="outlined"
              />
            </div>

            <div className={classes.labelAlign}>
              <label className={classes.textLabel}>Email:</label>
              <input
                id="outlined-basic"
                label="Email"
                placeholder="Email"
                type="email"
                ref={Email}
                value={eml}
                onChange={(e) => setEml(e.target.value)}
                className={classes.textInput}
                required
                variant="outlined"
              />
            </div>

            <div className={classes.labelAlign}>
              <label className={classes.textLabel}>
                Institution/Affliation/Company:
              </label>
              <input
                id="outlined-basic"
                label="company"
                type="text"
                ref={cpname}
                value={Cp_name}
                onChange={(e) => setCpname(e.target.value)}
                className={classes.textInput}
                variant="outlined"
              />
            </div>
            <div className={classes.labelAlign}>
              <label className={classes.textLabel}>Designation:</label>
              <input
                id="outlined-basic"
                label="deignation"
                placeholder="deisgnation"
                type="text"
                ref={designation}
                value={desi}
                onChange={(e) => setDesig(e.target.value)}
                className={classes.textInput}
                variant="outlined"
              />
            </div>
            <div className={classes.labelAlign}>
              <label className={classes.textLabel}>Dept/Unit:</label>
              <input
                id="outlined-basic"
                label="dept/unit"
                placeholder="dept/unit"
                type="text"
                ref={deptm}
                value={dept}
                onChange={(e) => setDept(e.target.value)}
                className={classes.textInput}
                variant="outlined"
              />
            </div>
            <div className={classes.labelAlign}>
              <label className={classes.textLabel}>Address:</label>
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
              <label className={classes.textLabel}>Country of residence:</label>
              <input
                id="outlined-basic"
                label="country"
                placeholder="Country"
                type="text"
                ref={contr}
                value={cont}
                onChange={(e) => setCont(e.target.value)}
                className={classes.textInput}
                variant="outlined"
              />
            </div>

            <div className={classes.labelAlign}>
              <label className={classes.textLabel}>Area of Interset:</label>

              <select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                ref={section}
                value={sec_tion}
                onChange={(e) => setSection(e.target.value)}
                className={classes.textInput}
                variant="outlined"
                defaultValue="select"
              >
                <option value="Trade and Investment Innovation Town Hall">
                  Trade and Investment Innovation Town Hall
                </option>
                <option value=" Al and Robotics Town Hall">
                  {" "}
                  Al and Robotics Town Hall
                </option>
                <option value="Electric Vehicle Innovation Town Hall">
                  Electric Vehicle Innovation Town Hall
                </option>
                <option value="Innovation Hubs' Forum">
                  Innovation Hubs' Forum
                </option>
                <option value="Disruptive Starup Forum">
                  Disruptive Starup Forum
                </option>
                <option value=" Telecoms and 5G Technologies Forum">
                  {" "}
                  Telecoms and 5G Technologies Forum
                </option>
                <option value="Broadband Communication Forum">
                  Broadband Communication Forum
                </option>
                <option value="Semiconductor and Chipmaking Forum">
                  Semiconductor and Chipmaking Forum
                </option>
                <option value="Drone Technology Forum">
                  Drone Technology Forum
                </option>
                <option value="Satellite Internet Communication Forum">
                  Satellite Internet Communication Forum
                </option>
                <option value=" Renewable and Clean Energy Forum">
                  {" "}
                  Renewable and Clean Energy Forum
                </option>
                <option value=" SmartAgriTech Forum">
                  {" "}
                  SmartAgriTech Forum
                </option>
                <option value="AR & VR Forum">
                  {" "}
                  Renewable and Clean Energy Forum
                </option>
              </select>
            </div>
            <div
              className={classes.labelAlign}
              onChange={(e) => setAttend(e.target.value)}
            >
              <label className={classes.textLabel}>Attend Event In ?</label>
              <label className={classes.nitext}>
                <input type="radio" value="In_person" ref={attend} />
                In person
              </label>
              <label className={classes.nitext}>
                <input type="radio" value="Virtuall" ref={attend} />
                Virtual
              </label>
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
        <hr />
      </div>

      <Footer />
    </React.Fragment>
  );
}
