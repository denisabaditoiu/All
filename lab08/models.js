const Sequelize = require('sequelize');
const sequelize = new Sequelize('c9', 'root', 'p@ss', {
    dialect: 'mysql'
});

class Todo extends Sequelize.Model { };
Todo.init({
    identifier: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    taskName: { 
        type: Sequelize.STRING,
        allowNull: false,
        validate: { isAlpha: true }
    },
    priority: { 
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isValidPriority(value) {
                switch(value) {
                    case 'LOW':
                        break;
                    case 'MEDIUM':
                        break;
                    case 'HIGH':
                        break;
                    default:
                     throw new Error("Priority value should be only: LOW, MEDIUM or HIGH.");
                }
            }
        }
    },
    duration: Sequelize.INTEGER
}, {
    validate: {
        validateTodo() {
            if(this.duration < 0) {
                throw new Error("Duration should be a positive integer.")
            }
        }
    }, sequelize
});

Todo.sync();

module.exports = {
    sequelize,
    Todo
}