const Sequelize = require('sequelize');
const sequelize = new Sequelize('c9', 'root', 'p@ss', {
   dialect: 'mysql'
});
sequelize.authenticate().then(() => {
    console.log('Connection established successfully!');
}).catch(err => {
    console.log(`Error on connection: ${err}`);
})

class User extends Sequelize.Model {}
User.init({
    fullName: Sequelize.STRING,
    email: { type: Sequelize.STRING, primaryKey: true },
    password: Sequelize.STRING
}, {sequelize, modelName: 'users'});




class Todo extends Sequelize.Model {}
Todo.init({
    identifier: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    taskName: Sequelize.STRING,
    priority: Sequelize.STRING,
    duration: Sequelize.INTEGER
}, {sequelize, modelName: 'todos'});


Todo.belongsTo(User);
User.hasMany(Todo);
Todo.sync();
User.sync();

module.exports = {
    sequelize,
    User,
    Todo
}