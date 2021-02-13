const Password = require("./keys_private").Password || process.env.DB_PASSWORD;

const db_Url =
  "mongodb+srv://dev:" +
    Password +
    "@appointment-ps4a0.mongodb.net/test?retryWrites=true" ||
  process.env.DB_URL;

module.exports = {
  mongoURI: db_Url,
};

// mongodb: is the protocol definition
// localhost: 27017 is the server we are connecting to
// /myproject: is the database we wish to connect to

// https://mongodb.github.io/node-mongodb-native/2.0/tutorials/connecting/
