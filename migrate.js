require('dotenv').config();
var db = require('./database');
db.sequelize.sync()