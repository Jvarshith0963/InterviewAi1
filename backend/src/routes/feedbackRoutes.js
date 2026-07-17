const express = require("express");
const {
  createFeedback,
  getFeedback,
  getFeedbackByQuestion,
} = require("../controllers/feedbackController");

const router = express.Router();

router.post("/", createFeedback);
router.get("/", getFeedback);
router.get("/question/:questionId", getFeedbackByQuestion);

module.exports = router;