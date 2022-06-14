import express from "express";
const router = express.Router();
import { User } from "../models/User.js";

router.get("/register", (req, res) => {
  res.render("pages/register");
});

router.post("/register", (req, res) => {
  User.create({
    ...req.body,
  });
  res.redirect("/");
});

router.get("/login", (req, res) => {
  res.render("pages/login");
});

router.post("/login", (req, res) => {
  
  const { email, password } = req.body;
  User.findOne({ email, password }, (err, data) => {
    
    if (data) {

      if (data.email === email && data.password === password) {
        req.session.user = data._id;
        res.redirect("/");
      } else {
        res.redirect("/users/login");
      }
    } else {
      res.redirect("/users/register");
    }
  });
});

export default router;
