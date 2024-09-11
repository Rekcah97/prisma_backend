const express = require("express");
const cookieParser = require("cookie-parser");

require("dotenv").config();
const app = express();
const port = 5000;

//regular middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
const userRoutes = require("./routes/userRoutes");
app.use("/api", userRoutes);

//cookie middleware
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("connected to your database");
});

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
