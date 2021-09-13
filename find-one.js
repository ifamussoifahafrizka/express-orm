const { User } = require('./models');

const query = {
  where: { id: 1 }
}

User.findOne(query).then((user) => {
  console.log(user);
});