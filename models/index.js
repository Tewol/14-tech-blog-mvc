const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

//defining one to many relationships between  user and post
User.hasMany(Post, {
  foreignKey: "user_id",
});
Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

//defining one to many relationships comment and user
Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});
User.hasMany(Comment, {
  foreignKey: "user_id",
});

//defining one to many relationships post and comment
Comment.belongsTo(Post, {
  foreignKey: "post_id",
});
Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "cascade",
});
module.exports = {
  User,
  Post,
  Comment,
};
