const prisma = require("../config/prismaClient");

async function createResult(req, res, next) {
  try {
    const { score, interviewId } = req.body;
    const result = await prisma.result.create({
      data: { score, interviewId },
    });
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}

async function getResults(req, res, next) {
  try {
    const results = await prisma.result.findMany({
      include: { interview: true },
    });
    res.json(results);
  } catch (error) {
    next(error);
  }
}

async function getResultsByInterview(req, res, next) {
  try {
    const { interviewId } = req.params;
    const results = await prisma.result.findMany({
      where: { interviewId },
    });
    res.json(results);
  } catch (error) {
    next(error);
  }
}

module.exports = { createResult, getResults, getResultsByInterview };