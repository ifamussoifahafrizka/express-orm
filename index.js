const express = require('express')
const app = express()
const { User } = require('./models')
const port = 7000;
app.use(express.json())
// GET all user
app.get('/users', (req, res) => {
User.findAll()
.then(users => {
res.status(200).json(users)
})
});
// GET user by ID
app.get('/users/:id', (req, res) => {
User.findOne({
where: { id: req.params.id }
})
.then(user => {
res.status(200).json(user)
})
});

// Post user
app.post('/users', (req, res) => {
    User.create({
    username: req.body.username,
    password: req.body.password
    })
    .then(user => {
    res.status(201).json(user)
    }) .catch(err => {
    res.status(422).json("Can't create username")
    })
})
// Update user
app.put('/users/:id', (req, res) => {
    User.update({
      username: req.body.username,
      password: req.body.password
    }, {
      where: { id: req.params.id }
    })
      .then(user => {
        res.status(200).json("User update")
      }) .catch(err => {
        res.status(422).json("Can’t update user")
      })
 })

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})