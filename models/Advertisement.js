const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const uid = required("node-unique-id-generator");

const AdvertisementScheme = new Schema({
  shortText: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  images: {
    type: Array,
  },
  userId: {
    type: Object,
    default: uid.generateUnigueId(),
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
