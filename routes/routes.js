const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/user");
const Advertisement = require("../models/Advertisement");
const bcrypt = require("bcryptjs");

async function createAdmin() {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync("admin", salt);
    console.log(hash);
    const admin = new User({
      email: "admin",
      password: hash,
      username: "admin",
    });
    await admin.save();

    const user = await User.findOne({ email: "admin" }).select("_id");

    const advertisement = new Advertisement({
      shortText: "default advertisement",
      description: "default advertisement",
      userId: user._id,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      tags: [
        "default advertisement",
        "base advertisement",
        "init advertisement",
        "admin advertisement",
      ],
      isDeleted: false,
    });

    await advertisement.save();
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
    res.status(500).json({
      resultCode: 1,
      d: { login: "", email: "" },
      message: "error occurred",
    });
  }
});
router.post("/login", function (req, res, next) {
  passport.authenticate("local", async function (err, user, info) {
    if (err) {
      console.log(err);
      res.status(500).json({
        resultCode: 1,
        d: { login: "", email: "" },
        message: "error occurred",
      });
    }
    if (!user) {
      res.status(401).json({
        resultCode: 1,
        d: { login: "", email: "" },
        message: "EMAIL OR PASSWORD IS WRONG",
      });
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
  const { login, email, pass, phone = "" } = req.body;
  console.log(req.body);
  if (!login | !email | !pass) {
    res.status(401).json({
      resultCode: 1,
      d: { login: "", email: "" },
      message: "login&email&pass is required",
    });
  }
  try {
    await User.findOne({ email }, async (err, user) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          resultCode: 1,
          d: { login: "", email: "" },
          message: "error occurred",
        });
      }
      if (user) {
        console.log(err);
        res.json({
          resultCode: 1,
          d: { login: "", email: "" },
          message: "email is busy",
        });
      }
      if (!user) {
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
              res.status(500).json({
                resultCode: 1,
                d: { login: "", email: "" },
                message: "error occurred",
              });
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
      }
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      resultCode: 1,
      d: { login: "", email: "" },
      message: "error occurred",
    });
  }
});
router.post("/findbyemail", async function (req, res) {
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    res.status(401).json({
      resultCode: 1,
      d: { login: "", email: "" },
      message: "not auth",
    });
  }

  const { email } = req.body;

  try {
    await User.findOne({ email }, (err, user) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          resultCode: 1,
          d: { login: "", email: "" },
          message: "error occurred",
        });
      }
      if (!user) {
        res.status(404).json({
          resultCode: 1,
          d: { login: "", email: "" },
          message: "user not found",
        });
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
    res.status(500).json({
      resultCode: 1,
      d: { login: "", email: "" },
      message: "error occurred",
    });
  }
});
router.post("/findbyname", async function (req, res) {
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    res.status(401).json({
      resultCode: 1,
      d: { login: "", email: "" },
      message: "not auth",
    });
  }

  const { name } = req.body;

  try {
    const user = await User.find({ username: name }).select(
      "-__v -_id -password"
    );

    if (!user) {
      res.status(404).json({
        resultCode: 1,
        d: { login: "", email: "" },
        message: "not found",
      });
    }

    res.json({
      resultCode: 0,
      d: { user },
      message: "",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      resultCode: 1,
      d: { login: "", email: "" },
      message: "error occurred",
    });
  }
});
router.get("/alladvertisement", async function (req, res) {
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    res.status(401).json({
      resultCode: 1,
      d: [],
      message: "not auth",
    });
  }
  try {
    console.log("before");
    const advertisement = await Advertisement.find().select("-__v -_id");
    console.log("after");
    console.log(advertisement);
    if (!advertisement) {
      res.status(404).json({
        resultCode: 1,
        d: [],
        message: "not found",
      });
    }
    res.json({
      resultCode: 0,
      d: advertisement,
      message: "",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      resultCode: 1,
      d: [],
      message: "error occurred",
    });
  }
});
router.get("/myadvertisement", async function (req, res) {
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    res.status(401).json({
      resultCode: 1,
      d: [],
      message: "not auth",
    });
  }

  try {
    const userId = req.session.passport.user;
    const oldAdvertisement = await Advertisement.find().select("userId");

    const newAdvertisement = await Advertisement.find({
      userId: oldAdvertisement[0].userId,
    }).select("userId");

    const adveritsement = await Advertisement.find({
      userId,
    });

    if (!adveritsement) {
      res.status(404).json({
        resultCode: 1,
        d: [],
        message: "not found",
      });
    }
    console.log(req.session.passport.user);
    console.log(adveritsement);
    console.log(oldAdvertisement);
    console.log(newAdvertisement);
    res.json({
      resultCode: 0,
      d: adveritsement,
      message: "",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      resultCode: 1,
      d: [],
      message: "error occurred",
    });
  }
});
router.post("/createadvertisement", async function (req, res) {
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    res.status(401).json({
      resultCode: 1,
      d: [],
      message: "not auth",
    });
  }

  const { shortText, description = "", images = [""], tags = [""] } = req.body;

  await Advertisement.create(
    {
      shortText: shortText,
      description: description,
      images: images,
      userId: req.session.passport.user,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      tags: tags,
      isDeleted: false,
    },
    (err, advertisement) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          resultCode: 1,
          d: [],
          message: "error occurred",
        });
      }
      res.json({
        resultCode: 0,
        d: {},
        message: "",
      });
    }
  );
});

module.exports = router;
