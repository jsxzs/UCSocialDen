const express = require("express");
const getEvents = require("../controller/eventController");


const router = express.Router();

router.get("/", getEvents);


module.exports = router;