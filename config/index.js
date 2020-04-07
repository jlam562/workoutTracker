module.exports = require('mongoose').connect('mongodb://heroku_6zsj1fkj:7urm6arouju3adehlcsm1urdsp@ds155315.mlab.com:55315/heroku_6zsj1fkj',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })