import React, { useRef, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/styles";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Footer from "./Footer";
import PopUp from "./PopUp";

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
  const [desi, setDesig] = useState("");
  const [dept, setDept] = useState("");
  const [cont, setCont] = useState("");

  const [modelisOpen, setModelisOpen] = useState(false);

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
      designation: designation.current.value,
      deptm: deptm.current.value,
      contr: contr.current.value,
    };
    try {
      await axios.post("http://localhost:5000/api/users/register", data)
      .then((response) => {
        if (response.data.status === "success") {
          return(
            <PopUp />
          )
         
        } else if (response.data.status === "fail") {
          alert("An error ocurrred");
        }
      });
      await console.log(data);
    } catch (err) {
      console.log(err);
    }
    setModelisOpen(true);
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
                min="10"
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
              <select
                className={classes.textInput}
                ref={contr}
                value={cont}
                onChange={(e) => setCont(e.target.value)}
              >
                <option selected value="Nigeria">
                  Nigeria
                </option>
                <option value="Afganistan">Afghanistan</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antigua & Barbuda">Antigua & Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bonaire">Bonaire</option>
                <option value="Bosnia & Herzegovina">
                  Bosnia & Herzegovina
                </option>
                <option value="Botswana">Botswana</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Ter">
                  British Indian Ocean Ter
                </option>
                <option value="Brunei">Brunei</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Canary Islands">Canary Islands</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">
                  Central African Republic
                </option>
                <option value="Chad">Chad</option>
                <option value="Channel Islands">Channel Islands</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos Island">Cocos Island</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cote DIvoire">Cote DIvoire</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Curaco">Curacao</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="East Timor">East Timor</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Falkland Islands">Falkland Islands</option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French Southern Ter">French Southern Ter</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Great Britain">Great Britain</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guinea">Guinea</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="Indonesia">Indonesia</option>
                <option value="India">India</option>
                <option value="Iran">Iran</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Isle of Man">Isle of Man</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Korea North">Korea North</option>
                <option value="Korea Sout">Korea South</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Laos">Laos</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libya">Libya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macau">Macau</option>
                <option value="Macedonia">Macedonia</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Malawi">Malawi</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Midway Islands">Midway Islands</option>
                <option value="Moldova">Moldova</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Nambia">Nambia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherland Antilles">Netherland Antilles</option>
                <option value="Netherlands">
                  Netherlands (Holland, Europe)
                </option>
                <option value="Nevis">Nevis</option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>

                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau Island">Palau Island</option>
                <option value="Palestine">Palestine</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Phillipines">Philippines</option>
                <option value="Pitcairn Island">Pitcairn Island</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Republic of Montenegro">
                  Republic of Montenegro
                </option>
                <option value="Republic of Serbia">Republic of Serbia</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russia">Russia</option>
                <option value="Rwanda">Rwanda</option>
                <option value="St Barthelemy">St Barthelemy</option>
                <option value="St Eustatius">St Eustatius</option>
                <option value="St Helena">St Helena</option>
                <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                <option value="St Lucia">St Lucia</option>
                <option value="St Maarten">St Maarten</option>
                <option value="St Pierre & Miquelon">
                  St Pierre & Miquelon
                </option>
                <option value="St Vincent & Grenadines">
                  St Vincent & Grenadines
                </option>
                <option value="Saipan">Saipan</option>
                <option value="Samoa">Samoa</option>
                <option value="Samoa American">Samoa American</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome & Principe">Sao Tome & Principe</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syria">Syria</option>
                <option value="Tahiti">Tahiti</option>
                <option value="Taiwan">Taiwan</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania">Tanzania</option>
                <option value="Thailand">Thailand</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks & Caicos Is">Turks & Caicos Is</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Erimates">
                  United Arab Emirates
                </option>
                <option value="United States of America">
                  United States of America
                </option>
                <option value="Uraguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Vatican City State">Vatican City State</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Virgin Islands (Brit)">
                  Virgin Islands (Brit)
                </option>
                <option value="Virgin Islands (USA)">
                  Virgin Islands (USA)
                </option>
                <option value="Wake Island">Wake Island</option>
                <option value="Wallis & Futana Is">Wallis & Futana Is</option>
                <option value="Yemen">Yemen</option>
                <option value="Zaire">Zaire</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </select>
            </div>

            <div className={classes.labelAlign}>
              <label className={classes.textLabel}>Section to Attend:</label>

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
                <option value="Drone Technology Forum">
                  Drone Technology Forum
                </option>
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
