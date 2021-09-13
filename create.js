const { User } = require('./models')
User.create({
username: 'namaifa',
password: 'pwifa'
})
.then(user => {
console.log(user)
})