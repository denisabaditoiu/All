const express = require('express');
const bodyParser = require('body-parser');
const { sequelize, User, Todo } = require('./models');

const app = express();
app.use(bodyParser.json());

app.post('/register', (request, response) => {
    const user = request.body;
    if(user.fullName && user.email && user.password) {
        User.findOne({where: {email: user.email}}).then(result => {
            if(result) {
               response.status(409).send({
                   message: "User already exists"
               }) 
            } else {
                User.build(user).save().then(user => {
                    response.status(201).send({
                        message: "User created successfully"
                    });
                })
            }
        })
    } else {
        response.status(400).send({
            message: 'Missing user fields'
        });
    }
})

app.post('/login', (request, response) => {
    const credentials = request.body;
    User.findOne({where: {email: credentials.email, password: credentials.password}}).then(result => {
        if(result) {
            response.status(200).send(result);
        } else {
            response.status(404).send({
                message: 'Invalid credentials'
            })
        }
    })
})

app.post('/todo', (request, response) => {
    const todo = request.body;
    if(todo.taskName && todo.priority && todo.duration && todo.userEmail) {
        Todo.create(todo).then(todo => {
            response.status(201).send({
                message: 'Todo created successfully'
            });
        }).catch(err => {
            response.status(500).send(err)
        });
    } else {
        response.status(400).send({
            message: 'Invalid todo payload'
        })
    }
})

app.post('/todo/all', (request, response) => {
    const userEmail = request.body.userEmail;
    if(userEmail) {
        Todo.findAll({where: {userEmail: userEmail}}).then(result => {
            response.status(200).send(result);
        })
    } else {
        response.status(400).send({
            message: "Invalid payload for userEmail"
        })
    }
})

app.put('/todo/update', (request, response) => {
    const criteria = request.body;
    if(criteria.userEmail && criteria.taskName && criteria.newTaskName) {
        Todo.update({taskName: criteria.newTaskName}, {where: {taskName: criteria.taskName}}).then(result => {
            if(result[0]) {
                console.log(result);
            response.status(200).send({
                    message: `Updated: ${result[0]}`
                })
            } else {
                response.status(200).send({
                    message: "No matching records"
                })
            }
        }).catch(err => {
            response.status(500).send(err);
        })
    } else {
        response.status(400).send({
            message: 'Invalid payload'
        })
    }
})

app.delete('/todo/delete', (request, response) => {
    const criteria = request.body;
    if(criteria.userEmail && criteria.taskName) {
        Todo.destroy({where: criteria}).then(result => {
            if(result) {
                response.status(200).send({
                    message: `Deleted ${result} rows`
                });
            } else {
                response.status(200).send({
                    message: `No records found matching the criteria`
                })
            }
        }).catch(err => {
            response.status(500).send(err);
        })
    } else {
        response.status(400).send({
            message: 'Invalid payload'
        })
    }
})


app.listen(8080, () => {
    console.log('Server started on port 8080...');
})






