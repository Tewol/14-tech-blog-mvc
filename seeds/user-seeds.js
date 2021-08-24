const { User } = require("../models");

const userData = [
  {
    username: "Hewan",
    password: "Hew12345",
  },
  {
    username: "Test0",
    password: "Test01234",
  },
  {
    username: "Test1",
    password: "Test1234",
  },
  {
    username: "Test2",
    password: "Test1233",
  },
  {
    username: "Test3",
    password: "TestTest",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
