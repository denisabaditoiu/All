const { sequelize, Todo } = require('./models');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/todo', (request, response) => {
    const todo = request.body;
    if(todo.taskName && todo.priority && todo.duration) {
        Todo.create(todo).then(() => {
            response.status(201).send({
                message: 'Todo created successfully!'
            })
        }).catch(err => {
            response.status(400).send({ message: `Todo insertion erro: ${err}`})
            
        })
    } else {
        response.status(400).send({
            message: "Invalid payload"
        });
    }
});

app.listen(8080, () => {
    console.log('Server started on port 8080...')
});