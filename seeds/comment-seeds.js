const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Test comment",
    user_id: 1,
    post_id: 3,
  },
  {
    comment_text: "Teststing 123",
    user_id: 3,
    post_id: 2,
  },
  {
    comment_text: "Test1",
    user_id: 2,
    post_id: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
