const express = require("express");
const passport = require("passport");
const path = require("path");
const router = express.Router();
const User = require("../models/user");

async function createAdmin() {
  try {
    const admin = new User({
      email: "admin",
      passwordHash: "admin",
      name: "admin",
    });
    await admin.save();
  } catch (e) {
    console.log(e);
  }
}

createAdmin();

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.json({ resultCode: 0, d: { name: "name" } });
});
router.post("/logout", (req, res) => {
  res.json(hello);
});

module.exports = router;
