const { Blog } = require('../models');

const blogData = [
  {
    blogtitile: 'AI',
    blogbody: 'Testing ',
    date_created: "07/23/2021",
    user_id: "1",

  },

  {
    blogtitile: 'Fundamentals of programing language',
    blogbody: 'Testing ',
    date_created: "06/23/2021",
    user_id: "2",

  },

  {
    blogtitile: 'Fron End development essentials',
    blogbody: 'Testing ',
    date_created: "05/23/2021",
    user_id: "3",

  },
];

const seedBlogs = () => Blog.bulkCreate(blogData, {validate: true,individualHooks: true} );


module.exports = seedBlogs;
