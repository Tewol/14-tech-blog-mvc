const { Blog } = require('../models');

const blogData = [
  {
    blogtitile: 'AI',
    blogbody: 'Testing ',
    date_created: '07',
    user_id: 1,

  },

  {
    blogtitile: 'Fundamentals of programing language',
    blogbody: 'Testing ',
    date_created: '06',
    user_id: 1,

  },

  {
    blogtitile: 'Frot-End development essentials',
    blogbody: 'Testing ',
    date_created: '05',
    user_id: 2,

  },
];

const seedBlogs = () => Blog.bulkCreate(blogData, {individualHooks: true} );


module.exports = seedBlogs;
