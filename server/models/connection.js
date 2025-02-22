const mongoose = require("mongoose");

const uri = process.env.MONGO_URI || "";

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Successfully connected to MongoDB!");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error);
    process.exit(1);
  }
};

// **保持进程运行**
// setInterval(() => console.log("MongoDB Connection Active..."), 5000);

module.exports = connectDB;