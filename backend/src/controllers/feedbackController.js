const prisma = require("../config/prismaClient");

async function createFeedback(req, res, next) {
  try {
    const { comment, questionId } = req.body;
    const feedback = await prisma.feedback.create({
      data: { comment, questionId },
    });
    res.status(201).json(feedback);
  } catch (error) {
    next(error);
  }
}

async function getFeedback(req, res, next) {
  try {
    const feedback = await prisma.feedback.findMany({
      include: { question: true },
    });
    res.json(feedback);
  } catch (error) {
    next(error);
  }
}

async function getFeedbackByQuestion(req, res, next) {
  try {
    const { questionId } = req.params;
    const feedback = await prisma.feedback.findMany({
      where: { questionId },
    });
    res.json(feedback);
  } catch (error) {
    next(error);
  }
}

module.exports = { createFeedback, getFeedback, getFeedbackByQuestion };