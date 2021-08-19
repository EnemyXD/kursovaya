const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const MessageSchema = new Schema({
  roomName: {
    type: String,
  },
  username: {
    type: String,
  },
  text: {
    type: String,
  },
  Data: {
    type: Date,
    default: Date.now(),
  },
});

const HostDB = process.env.HOST_DB || "mongodb://mongodb:27017/";
const NameDB = process.env.DB_NAME_MESSAGES || "messages";
const UserDB = process.env.DB_USER || "admin";
const PasswordDB = process.env.DB_PASSWORD || "pass";

try {
  const mongo = mongoose.createConnection(HostDB, {
    user: UserDB,
    pass: PasswordDB,
    dbName: NameDB,
  });
  const Message = mongo.model("Messages", MessageSchema);
  module.exports = Message;
} catch (e) {
  console.log(e);
  process.exit(131);
}
