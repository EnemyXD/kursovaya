const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/user");
const Advertisement = require("../models/Advertisement");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const PORT = process.env.SERVER_PORT;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/code/upload");
  },
  filename: function (req, file, cb) {
    const mimetype = file.mimetype.split("/");
    const uniqueSuffix = `${Date.now()}.${mimetype[mimetype.length - 1]}`;
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1 * 1000 * 1000 },
});

async function createAdmin() {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync("admin", salt);
    const admin = new User({
      email: "admin",
      password: hash,
      username: "admin",
    });
    await admin.save();

    // const user = await User.findOne({ email: "admin" }).select("_id");

    // const advertisement = new Advertisement({
    //   shortText: "default advertisement",
    //   description: "default advertisement",
    //   userId: user._id,
    //   createdAt: Date.now(),
    //   updatedAt: Date.now(),
    //   tags: [
    //     "default advertisement",
    //     "base advertisement",
    //     "init advertisement",
    //     "admin advertisement",
    //   ],
    //   isDeleted: false,
    // });

    // await advertisement.save();
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
    await User.findOne({ _id: req.session.passport?.user }, (err, user) => {
      if (err) {
        console.log(err);
      }
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
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(pass, salt);

        await User.create(
          {
            email: email,
            username: login,
            password: hash,
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
router.post("/find/email", async function (req, res) {
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    res.status(401).json({
      resultCode: 1,
      d: [],
      message: "not auth",
    });
  }

  const { email } = req.body;

  if (!email) {
    try {
      await User.find((err, user) => {
        if (err) {
          console.log(err);
          res.status(500).json({
            resultCode: 1,
            d: [],
            message: "error occurred",
          });
        }
        if (!user) {
          res.status(404).json({
            resultCode: 1,
            d: [],
            message: "user not found",
          });
        } else {
          res.json({
            resultCode: 0,
            d: user,
            message: "",
          });
        }
      }).select("-__v -_id -password");
    } catch (e) {
      console.log(e);
      res.status(500).json({
        resultCode: 1,
        d: [],
        message: "error occurred",
      });
    }
  } else {
    try {
      await User.find({ email }, (err, user) => {
        if (err) {
          console.log(err);
          res.status(500).json({
            resultCode: 1,
            d: [],
            message: "error occurred",
          });
        } else if (!user) {
          res.status(404).json({
            resultCode: 1,
            d: [],
            message: "user not found",
          });
        } else {
          res.json({
            resultCode: 0,
            d: user,
            message: "",
          });
        }
      }).select("-__v -_id -password");
    } catch (e) {
      console.log(e);
      res.status(500).json({
        resultCode: 1,
        d: [],
        message: "error occurred",
      });
    }
  }
});
router.post("/find/name", async function (req, res) {
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    res.status(401).json({
      resultCode: 1,
      d: [],
      message: "not auth",
    });
  }

  const { name } = req.body;
  if (!name) {
    try {
      const user = await User.find().select("-__v -_id -password");

      if (!user) {
        res.status(404).json({
          resultCode: 1,
          d: [],
          message: "not found",
        });
      }

      res.json({
        resultCode: 0,
        d: user,
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
  } else {
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
        d: user,
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
  }
});
router.get("/advertisement/all", async function (req, res) {
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    res.status(401).json({
      resultCode: 1,
      d: [],
      message: "not auth",
    });
  }
  try {
    const advertisement = await Advertisement.find().select("-__v -_id");
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
router.get("/advertisement/my", async function (req, res) {
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    res.status(401).json({
      resultCode: 1,
      d: [],
      message: "not auth",
    });
  }

  try {
    const userId = req.session.passport.user;

    const adveritsement = await Advertisement.find({
      userId,
    }).select("-__v");

    if (!adveritsement) {
      res.status(404).json({
        resultCode: 1,
        d: [],
        message: "not found",
      });
    }

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
router.post(
  "/advertisement/create",
  upload.single("images"),
  async function (req, res) {
    if (!req.isAuthenticated || !req.isAuthenticated()) {
      res.status(401).json({
        resultCode: 1,
        d: [],
        message: "not auth",
      });
    }
    const { shortText, description = "", tags = [""] } = req.body;
    await Advertisement.create(
      {
        shortText: shortText,
        description: description,
        images: {
          fieldname: req.file.fieldname,
          originalname: req.file.originalname,
          encoding: req.file.encoding,
          mimetype: req.file.mimetype,
          destination: req.file.destination,
          filename: req.file.filename,
          path: req.file.path,
          size: req.file.size,
          file: `http://localhost:${PORT}/${req.file.filename}`,
        },
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
  }
);
router.post("/find/all", async function (req, res) {
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    res.status(401).json({
      resultCode: 1,
      d: [],
      message: "not auth",
    });
  }

  const { shortText } = req.body;

  if (!shortText) {
    try {
      const advertisement = await Advertisement.find().select("-_id -__v");
      if (!advertisement) {
        res.json({
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
  }

  try {
    const advertisement = await Advertisement.find({ shortText }).select(
      "-_id -__v"
    );
    if (!advertisement) {
      res.json({
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
router.post("/find/my", async function (req, res) {
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    res.status(401).json({
      resultCode: 1,
      d: [],
      message: "not auth",
    });
  }

  const { shortText } = req.body;
  const userId = req.session.passport.user;
  if (!shortText) {
    try {
      const advertisement = await Advertisement.find({ userId }).select(
        "-_id -__v"
      );
      if (!advertisement) {
        res.json({
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
    }
  }

  try {
    const advertisement = await Advertisement.find({
      shortText,
      userId,
    }).select("-__v");

    if (!advertisement) {
      res.json({
        resultCode: 1,
        d: [],
        message: "not found",
      });
    } else {
      res.json({
        resultCode: 0,
        d: advertisement,
        message: "",
      });
    }
  } catch (e) {}
});
router.post("/delete", async function (req, res) {
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    res.status(401).json({
      resultCode: 1,
      d: [],
      message: "not auth",
    });
  }
  const { id } = req.body;
  await Advertisement.find({ _id: id }, async (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        resultCode: 1,
        d: [],
        message: "error occurred",
      });
    } else if (!data) {
      res.status(404).json({
        resultCode: 1,
        d: [],
        message: "not found",
      });
    } else if (data[0].userId != req.session.passport.user) {
      res.status(401).json({
        resultCode: 1,
        d: [],
        message: "not auth",
      });
    } else {
      await Advertisement.updateOne(
        { _id: id },
        { $set: { isDeleted: true, updatedAt: Date.now() } }
      );

      res.json({
        resultCode: 0,
        d: [],
        message: "",
      });
    }
  });
});
router.get("*", function (req, res) {
  res.sendFile("/code/build/index.html");
});

module.exports = router;
