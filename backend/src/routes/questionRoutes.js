const express = require("express");
const {
  createQuestion,
  getQuestions,
  getQuestionsByInterview,
} = require("../controllers/questionController");

const router = express.Router();

router.post("/", createQuestion);
router.get("/", getQuestions);
router.get("/interview/:interviewId", getQuestionsByInterview);

module.exports = router;