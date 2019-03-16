const Password = require("./keys_private").Password;

module.exports = {
  mongoURI:
    "mongodb+srv://dev:" +
    Password +
    "@appointment-ps4a0.mongodb.net/test?retryWrites=true"
};

// mongodb: is the protocol definition
// localhost: 27017 is the server we are connecting to
// /myproject: is the database we wish to connect to

// https://mongodb.github.io/node-mongodb-native/2.0/tutorials/connecting/
