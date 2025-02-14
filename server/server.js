import express from "express";
import cors from "cors";
import { eventRoutes } from "./routes/event.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", eventRoutes);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});



