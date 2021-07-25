const { User } = require('../models');

const userData = [
  {
    Username: 'Tech01',
    email: 'test@test1.com',
    password: 'Test@Test1',
  },

  {
    Username: 'Tech02',
    email: 'test@test2.com',
    password: 'Test@Test2',
  },
  {
    Username: 'Tech03',
    email: 'test@test3.com',
    password: 'Test@Test3',
  },
];

const seedUsers = () => User.bulkCreate(userData, {validate: true,individualHooks: true} );

module.exports = seedUsers;
