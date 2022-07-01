const express = require("express");
const authRoutes = require("./routes/authRoutes.js");
const dbConnect = require("./middlewares/db.js");

require("dotenv").config();
//Initialising database
dbConnect();

//Initialising Express
const app = express();

app.use(express.json());

//Basic Routes
app.use("/auth", authRoutes);

const path = require("path");

app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});
const PORT = process.env.PORT;
app.listen(PORT || 80, () => console.log("Server Running"));
