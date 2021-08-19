const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const AdvertisementScheme = new Schema({
  shortText: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  images: {
    fieldname: String,
    originalname: String,
    encoding: String,
    mimetype: String,
    destination: String,
    filename: String,
    path: String,
    size: Number,
    file: String,
  },
  userId: {
    type: Object,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
  tags: {
    type: Array,
  },
  isDeleted: {
    type: Boolean,
  },
});

const HostDB = process.env.HOST_DB || "mongodb://mongodb:27017/";
const NameDB = process.env.DB_NAME_ADVERTISEMENT || "advertisement";
const UserDB = process.env.DB_USER || "admin";
const PasswordDB = process.env.DB_PASSWORD || "pass";

try {
  const mongo = mongoose.createConnection(HostDB, {
    dbName: NameDB,
    user: UserDB,
    pass: PasswordDB,
  });
  const Advertisement = mongo.model("Advertisement", AdvertisementScheme);
  module.exports = Advertisement;
} catch (e) {
  console.log(e);
  process.exit(131);
}
