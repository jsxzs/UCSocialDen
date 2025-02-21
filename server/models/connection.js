// import { MongoClient, ServerApiVersion } from "mongodb";

// const uri = process.env.ATLAS_URI || "";
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// try {
//   // Connect the client to the server
//   await client.connect();
//   // Send a ping to confirm a successful connection
//   await client.db("admin").command({ ping: 1 });
//   console.log(
//    "Pinged your deployment. You successfully connected to MongoDB!"
//   );
// } catch(err) {
//   console.error(err);
// }

// let db = client.db("employees");

// export default db;



const mongoose = require("mongoose");

const uri = process.env.MONGO_URI || "";
// const MONGO_URI = "mongodb+srv://lez022:admin12345@cluster.ntiw1.mongodb.net/210Database";

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