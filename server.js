const express = require("express");
const mongoose = require("mongoose"); // Connector for MongoDB
const bodyParser = require("body-parser"); // Let us use requests
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const appointments = require("./routes/api/appointments");
const timeslots = require("./routes/api/timeslots");

const app = express();

// Cross-origin resource sharing (CORS)
// Allows restricted resources
// app.all("/*", (req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Content-type,Accept,X-Access-Token,X-Key"
//   );
//   if (req.method == "OPTIONS") {
//     res.status(200).end();
//   } else {
//     next();
//   }
// });

// view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

// Middleware
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

// MongoDB config og connection
const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

// Uses the routes from routes/api/items.js
//app.use("/api/endpointName", endpointName);
app.use("/api/appointments", appointments);
app.use("/api/timeslots", timeslots);

const port = 5000; // Sets port for server

app.listen(port, () => console.log(`Server started on port ${port}`));
