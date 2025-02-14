import express from "express";
import { eventController } from '../controller/eventController.js';

const eventRoutes = express.Router();

eventRoutes.get("/", async (req, res) => {
  let results = await eventController.getAllEvents();
  res.send(results).status(200);
});

export { eventRoutes };
