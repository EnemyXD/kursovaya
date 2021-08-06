const express = require("express");
const path = require("path");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/user");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const PORT = process.env.SERVER_PORT || 2929;

const router = require("./routes/routes");

const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["POST"],
  credentials: true,
};

const options = {
  usernameField: "username",
  passwordFiels: "password",
  passReqToCallback: false,
};

passport.use(
  "local",
  new LocalStrategy(options, async (username, password, done) => {
    await User.findOne({ username: username }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      if (user.password !== password) {
        return done(null, false);
      }
      return done(null, user);
    });
  })
);

passport.serializeUser((user, cb) => {
  console.log(user);
  cb(null, user.id);
});

passport.deserializeUser(async (id, cb) => {
  try {
    await User.find({ id }, (err, user) => {
      cb(err, user);
    });
  } catch (e) {
    console.log(e);
  }
});

app.use(express.static(path.join(__dirname, "build")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  require("express-session")({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST"],
    credentials: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", router);

app.listen(PORT, () => {
  console.log(`server listening on ${PORT} port`);
});
