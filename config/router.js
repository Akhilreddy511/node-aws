module.exports = function(app,express){
let usersApi = require('../controllers/users.controller')(express);
app.use("/user",usersApi);
}