import mongoose from "mongoose";
import userModel from "../models/User.js";

export const registerUsers = async (req, res) => {
  try {
    const user = {
      Firstname: req.body.Fname,
      Lastname: req.body.Lname,
      Email: req.body.Email,
      Phone: req.body.contact,
      Address: req.body.address,
      Country: req.body.contr,
      Section: req.body.section,
    };

    const newUser = new userModel(user);

    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
  }
};
