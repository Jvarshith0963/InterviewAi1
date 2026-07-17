const prisma = require("../config/prismaClient");
const bcrypt = require("bcrypt");

async function createUser(req, res, next) {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });
    res.status(201).json({ id: user.id, name: user.name, email: user.email });
  } catch (error) {
    next(error);
  }
}

async function getUsers(req, res, next) {
  try {
    const users = await prisma.user.findMany({
      select: { id: true, name: true, email: true, createdAt: true },
    });
    res.json(users);
  } catch (error) {
    next(error);
  }
}

module.exports = { createUser, getUsers };