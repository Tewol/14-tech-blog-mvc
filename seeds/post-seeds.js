const { Post } = require("../models");

const postData = [
  {
    title: "AI",
    content:
      "Test1.",
    user_id: 1,
  },
  {
    title: "IOT",
    content: "Test2.",
    user_id: 2,
  },
  {
    title: "Java",
    content: "Test3.",
    user_id: 1,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
