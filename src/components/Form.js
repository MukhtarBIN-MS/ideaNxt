import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({

  Rcontainer: {
    border:'1px solid grey',
    padding:'5px',
    background:'#000080'
},
title:{
    fontFamily:'Russo one',
    textAlign: 'center',
    fontSize:'2 rem',
    color:'#F2F3F5'
},
  form:{}

}));

export default function Form() {
  const [state, setState] = useState();
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
  };
  const handleInputChange = evt => {
    const name = evt.target.name;
    const value =
    evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setState({
      ...state,
      [name]: value
    })
  }

const classes = useStyles();
 return (
   <React.Fragment>
  <div className={classes.Rcontainer}>
  <h2 className={classes.title}>Register to Attend</h2>

</div>
   <div className={classes.form}>
    <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            onChange={handleInputChange}
            required
          />
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Phone number</label>
          <input
            type="number"
            name="number"
            onChange={handleInputChange}
            required
          />
        </div>
        
       
        <button type="submit">Register</button>
      </form>
    </div>
    </React.Fragment>
    
  );
}
