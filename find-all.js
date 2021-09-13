const { User } = require('./models');

User.findAll().then((user) => {
  console.log(user);
});