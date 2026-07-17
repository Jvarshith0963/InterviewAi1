const prisma = require("../config/prismaClient");

async function createInterview(req, res, next) {
  try {
    const { title, userId } = req.body;
    const interview = await prisma.interview.create({
      data: { title, userId },
    });
    res.status(201).json(interview);
  } catch (error) {
    next(error);
  }
}

async function getInterviews(req, res, next) {
  try {
    const interviews = await prisma.interview.findMany({
      include: { questions: true, results: true },
    });
    res.json(interviews);
  } catch (error) {
    next(error);
  }
}

module.exports = { createInterview, getInterviews };