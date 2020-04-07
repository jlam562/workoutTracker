module.exports = require('mongoose').connect('',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })