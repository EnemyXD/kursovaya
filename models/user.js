const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  contactPhone: {
    type: String,
  },
});

const HostDB = process.env.HOST_DB || "mongodb://mongodb:27017/";
const NameDB = process.env.DB_NAME_USERS || "users";
const UserDB = process.env.DB_USER || "admin";
const PasswordDB = process.env.DB_PASSWORD || "pass";

try {
  const mongo = mongoose.createConnection(HostDB, {
    user: UserDB,
    pass: PasswordDB,
    dbName: NameDB,
  });
  const User = mongo.model("User", UserSchema);
  module.exports = User;
} catch (e) {
  console.log(e);
  process.exit(131);
}
