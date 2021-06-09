const express = require("express");
const mongoose = require("mongoose");

const objectsRoutes = require("./routes/objects");
const userRoutes = require("./routes/user");

const app = express();

mongoose
  .connect(
    "mongodb+srv://test-admin:" +
      process.env.MONGO_ATLAS_PW +
      "@cluster0.eeeix.mongodb.net/" +
      process.env.MONGO_ATLAS_DB_NAME +
      "?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log(`Connected to ${process.env.MONGO_ATLAS_DB_NAME} database!`);
  })
  .catch((error) => {
    console.log("Connection failed");
    console.log("----------------");
    console.log(error);
  });

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/objects", objectsRoutes);
app.use("/api/user", userRoutes);

module.exports = app;
