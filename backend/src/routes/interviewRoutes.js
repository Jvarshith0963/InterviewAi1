const express = require("express");
const { createInterview, getInterviews } = require("../controllers/interviewController");

const router = express.Router();

router.post("/", createInterview);
router.get("/", getInterviews);

module.exports = router;