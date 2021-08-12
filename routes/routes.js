const express = require("express");
const passport = require("passport");
const path = require("path");
const router = express.Router();
const User = require("../models/user");
const LocalStrategy = require("passport-local").Strategy;

async function createAdmin() {
  try {
    const admin = new User({
      email: "admin",
      password: "admin",
      username: "admin",
    });
    await admin.save();
  } catch (e) {
    console.log(e);
  }
}

createAdmin();

router.get("/whoami", async function (req, res) {
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    res.json({
      resultCode: 1,
      d: { login: "", email: "" },
      message: "NOT AUTH",
    });
  }
  console.log(req.session.passport.user);
  try {
    await User.findOne({ _id: req.session.passport.user }, (err, user) => {
      if (err) {
        console.log(err);
      }
      console.log(user);
      if (user) {
        res.json({
          resultCode: 0,
          d: { login: user.username, email: user.email },
          message: "",
        });
      }
    });
  } catch (e) {
    console.log(e);
  }
});
router.post("/login", function (req, res, next) {
  console.log(req.body);
  passport.authenticate("local", async function (err, user, info) {
    console.log("ERR OF AUTHENTICATE");
    console.log(err);
    console.log("USER AFTER AUTHENTICATE");
    console.log(user);
    console.log("INFO ABOUT AUTHENTICATE");
    console.log(info);
    if (!user) {
      res.json(info);
    }
    if (user) {
      req.logIn(user, function (err) {
        if (err) return next(err);
        res.json({
          resultCode: 0,
          d: { login: user.username, email: user.email },
          message: "",
        });
      });
    }
  })(req, res, next);
});
router.post("/logout", (req, res) => {
  req.logOut();
  res.json({
    resultCode: 0,
    d: {},
    message: "",
  });
});
router.post("/reg", async function (req, res) {
  console.log(req.body);
  const { login, email, pass, phone = "" } = req.body;
  try {
    await User.create(
      {
        email: email,
        username: login,
        password: pass,
        contactPhone: phone,
      },
      (err, user) => {
        if (err) {
          console.log(err);
        }
        if (user) {
          res.json({
            resultCode: 0,
            d: {},
            message: "",
          });
        }
      }
    );
  } catch (e) {
    console.log(e);
  }
});
router.post("/findbyemail", async function (req, res) {
  const { email } = req.body;

  try {
    await User.findOne({ email }, (err, user) => {
      if (err) {
        console.log(err);
      } else {
        res.json({
          resultCode: 0,
          d: {
            email: user.email,
            usename: user.username,
            contactPhone: user.contactPhone,
          },
          message: "",
        });
      }
    });
  } catch (e) {
    console.log(e);
  }
});
router.post("/findbyname", async function (req, res) {
  const { name } = req.body;

  try {
    const user = await User.find({ username: name }).select(
      "-__v -_id -password"
    );
    res.json({
      resultCode: 0,
      d: { user },
      message: "",
    });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
