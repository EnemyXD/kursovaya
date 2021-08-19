const express = require("express");
const path = require("path");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/user");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const http = require("http");
const socketIO = require("socket.io");

const Message = require("./models/messages");

const app = express();
const server = http.Server(app);
const io = socketIO(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

const PORT = process.env.SERVER_PORT || 2929;

const router = require("./routes/routes");

passport.use(
  "local",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordFiels: "password",
      session: true,
    },
    async (email, password, done) => {
      await User.findOne({ email: email }, (err, user) => {
        if (err) {
          console.log(err);
          return done(err);
        }
        if (!user) {
          return done(null, false, {
            resultCode: 1,
            d: { login: "", email: "" },
            message: "INCORRECT DATA",
          });
        }
        if (!bcrypt.compareSync(password, user.password)) {
          return done(null, false, {
            resultCode: 1,
            d: { login: "", email: "" },
            message: "INCORRECT DATA",
          });
        }
        return done(null, user);
      });
    }
  )
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

app.use(express.static(path.join(__dirname, "upload")));

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
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

const sessionMiddleware = require("express-session")({
  secret: process.env.COOKIE_SECRET,
  saveUninitialized: false,
  resave: false,
});

app.use(sessionMiddleware);
io.use((socket, next) => {
  sessionMiddleware(socket.request, {}, next);
});

// io.on("connect", (socket) => {
//   const session = socket.request.session;

//   // Используем примерно так:
//   session.user.login;
// });

app.use("/", router);

io.on("connection", async (socket) => {
  const { id } = socket;
  const { roomName } = socket.handshake.query;

  let ArrayOfRoomName;

  if (!roomName) {
    try {
      await Message.find({ roomName: "common" }, (err, doc) => {
        if (err) {
          console.log(err);
        }
        if (doc) {
          socket.emit("recieveOldCommon", doc);
          console.log("send");
        }
      }).select("-__v -_id -roomName");
    } catch (e) {
      console.log(e);
    }
  } else {
    ArrayOfRoomName = roomName.split("-").sort();
    try {
      let messages = await Message.find({
        roomName: `${ArrayOfRoomName[0]}-${ArrayOfRoomName[1]}`,
      });
      if (messages) {
        socket.emit("recieveOldPrivate", messages);
      }
    } catch (e) {
      console.log(e);
    }
  }

  console.log("socket connected: " + id);

  socket.on("message-to-me", (msg) => {
    msg.type = "me";
    socket.emit("message-to-me", msg);
  });

  socket.on("message-to-all", async (msg) => {
    try {
      await Message.create(
        {
          roomName: "common",
          username: msg.username,
          text: msg.text,
          Data: Date.now(),
        },
        (err, doc) => {
          if (err) {
            console.log(err);
          }
          socket.broadcast.emit("message-to-all", doc);
          socket.emit("message-to-all", doc);
        }
      );
    } catch (e) {
      console.log(e);
    }
  });

  roomName &&
    console.log(`Socket roomName: ${ArrayOfRoomName[0]}-${ArrayOfRoomName[1]}`);
  roomName && socket.join(`${ArrayOfRoomName[0]}-${ArrayOfRoomName[1]}`);
  socket.on("message-to-room", async (msg) => {
    try {
      await Message.create(
        {
          roomName: roomName,
          username: msg.username,
          text: msg.text,
          Data: Date.now(),
        },
        (err, doc) => {
          if (err) {
            console.log(err);
          }
          socket
            .to(`${ArrayOfRoomName[0]}-${ArrayOfRoomName[1]}`)
            .emit("message-to-room", doc);
          socket.emit("message-to-room", doc);
        }
      );
    } catch (e) {
      console.log(e);
    }
  });

  socket.on("disconnect", () => {
    console.log("socket disconnected: " + id);
  });
});
server.listen(PORT, () => {
  console.log(`server listening on ${PORT} port`);
});
