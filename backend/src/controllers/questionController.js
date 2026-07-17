const prisma = require("../config/prismaClient");

async function createQuestion(req, res, next) {
  try {
    const { text, interviewId } = req.body;
    const question = await prisma.question.create({
      data: { text, interviewId },
    });
    res.status(201).json(question);
  } catch (error) {
    next(error);
  }
}

async function getQuestions(req, res, next) {
  try {
    const questions = await prisma.question.findMany({
      include: { feedback: true },
    });
    res.json(questions);
  } catch (error) {
    next(error);
  }
}

async function getQuestionsByInterview(req, res, next) {
  try {
    const { interviewId } = req.params;
    const questions = await prisma.question.findMany({
      where: { interviewId },
      include: { feedback: true },
    });
    res.json(questions);
  } catch (error) {
    next(error);
  }
}

module.exports = { createQuestion, getQuestions, getQuestionsByInterview };