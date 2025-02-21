// import express from "express";
// import cors from "cors";
// import connectDB from "./models/connection.js";
// import eventRoutes from "./routes/event.js";

// const PORT = process.env.PORT || 5002;
// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use("/", eventRoutes);

// app.use("/api/users", require("./routes/userRoutes.js"));
// app.use("/api/events", require("./routes/eventRoutes.js"));

const express = require("express");
const connectDB = require("./models/connection.js"); 
const cors = require("cors");

const PORT = process.env.PORT;
const app = express();
app.use(express.json()); 
app.use(cors());

connectDB(); 

app.use("/api/users", require("./routes/user.js"));
app.use("/api/events", require("./routes/event.js"));

//app.use("/api/users/{email}", require("./routes/userRoutes.js"));
//app.use("/api/events", require("./routes/eventRoutes"));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});









