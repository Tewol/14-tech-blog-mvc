const { User } = require('../models');

const userData = [
  {
    Username: 'Tech',
    email: 'test@test1.com',
    password: 'Test@Test1',
  },

  {
    Username: 'Techo',
    email: 'test@test2.com',
    password: 'Test@Test2',
  },
  {
    Username: 'Teche',
    email: 'test@test3.com',
    password: 'Test@Test3',
  },
];

const seedUsers = () => User.bulkCreate(userData, {validate: true,individualHooks: true} );

module.exports = seedUsers;
