const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.locals.todos = [];

app.get('/todos', (request, response) => {
    response.status(200).send(app.locals.todos);    
});

app.get('/todo', (request, response) => {
    const index = request.query.index;
    response.status(200).send(app.locals.todos[index]);
})

app.get('/todos/:index', (request, response) => {
    const index = request.params.index;
    response.status(200).send(app.locals.todos[index]);
})

app.post('/todos', (request, response) => {
    const todo = request.body;
    if(todo.taskName && todo.priority && todo.duration) {
        app.locals.todos.push(todo);
        response.status(201).send({
            message: 'Todo Created'
        });    
    } else {
        response.status(400).send({
            message: 'Bad request'
        })
    }
    
})


app.put('/todos', (request, response) => {
    const index = request.body.index;
    const todo = app.locals.todos[index];
    if(todo) {
        todo.duration++;
        response.status(200).send({
            message: 'Todo updated successfully'
        })    
    } else {
        response.status(404).send({
            message: 'Todo not found'
        })
    }
    
});

app.delete('/todos', (request, response) => {
    const index = request.body.index;
    const todo = app.locals.todos[index];
    if(todo) {
        app.locals.todos.splice(index, 1)
        response.status(200).send({
            message: 'Todo deleted'
        })
    } else {
        response.status(400).send({
            message: 'Bad request'
        })
    }
})

app.listen(8080, () => {
    console.log('Server started on port 8080...');
});