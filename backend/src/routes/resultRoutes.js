const express = require("express");
const {
  createResult,
  getResults,
  getResultsByInterview,
} = require("../controllers/resultController");

const router = express.Router();

router.post("/", createResult);
router.get("/", getResults);
router.get("/interview/:interviewId", getResultsByInterview);

module.exports = router;