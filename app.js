const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const contactRouter = require("./routes/contactRouter");
const authRouter = require("./routes/authRouter");

const app = express();

const port = process.env.PORT || 3000;

require("dotenv").config();

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRouter);

app.use("/api/contact", contactRouter);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log("Database Connected");

    app.listen(port, () => {gid
      console.log(`Server is running on PORT ${port}`);
    });
  } catch (err) {
    console.error(err);
    console.log("Unable to connect");
  }
};

start();

//  <p> In an Express.js backend, a models folder is typically used to define the
// data structure and schema of your application.

//   In an Express.js backend, the controllers folder is used to store the
//   logic for handling incoming requests and sending responses — essentially,
//   the "brains" behind each route.

//   In an Express.js backend, the routes folder is used to organize the different
//   API endpoints (routes) of your application. It's where you define what should
//   happen when the server receives specific HTTP requests (like GET, POST, PUT,
//   DELETE) at certain URLs.

//  FLOW - MODEL FOLDER ===> CONTROLLER FOLDER =====> ROUTES FOLDER THEN BACK TO THE APP.JS

// const signup = {
// email: "",
// password: "",
// repeatPassword: ""
// }

// username: omoteshoidowu
// password: Kuh872XCZPRHcSKB
// mongodb+srv://omoteshoidowu:Kuh872XCZPRHcSKB@cluster0.hnereoo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
