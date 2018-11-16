const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application/json
app.use(bodyParser.json());

let todos = [
    
];

app.get("/", (req, res) => {
   res.status(200).send("My first WEB API"); 
});

app.get('/get-all-todos', (req,res) =>{
   res.status(200).send(todos); 
});

app.get('/get-todos', (req, res) =>{
    res.status(200).send(todos.filter(el => el.id == req.query.id));
})

app.post('/add-todo', (req, res) => {
   let todo = {};
   todo.id = todos.length + 1;
   todo.taskName = req.body.taskName;
   todo.priority = req.body.priority;
   todo.duration = req.body.duration;
   todos.push(todo);
   res.status(200).send('ToDo Added Successfully');
});

app.put('/todos/:id/update', (req, res) =>{
   const id = req.params.id;
   let updated = false;
   todos.forEach((todo) =>{
      if(todo.id == id){
          updated = true;
          todo.taskName = req.body.taskName;
          todo.priority = req.body.priority;
          todo.duration = req.body.duration;
      } 
   });
   if(updated){
    res.status(200).send(`Todo ${id} updated!`);    
   } else {
       res.status(404).send(`Could not find resource with id ${id}`);
   }
   
});

app.delete('/todos/:id/delete', (req, res) =>{
   const index = req.params.id - 1;
   
   if(index < todos.length){
    todos.splice(index, 1);    
    res.status(200).send(`ToDo with id ${index + 1} was deleted`);
   } else {
    res.status(404).send(`Could not find any item with id ${index + 1}`);
   }
   
});

app.delete

app.listen(8080, ()=>{
   console.log('Server started on port 8080...') 
});