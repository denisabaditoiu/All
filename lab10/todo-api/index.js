const express = require('express')
const bodyParser = require('body-parser');
const Sequelize = require('sequelize')
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const sequelize = new Sequelize('c9', 'cosmincartas', '', {
    host:'localhost',
    dialect:'mysql'
});

sequelize.authenticate().then(()=>{
    console.log('Connection to db realized successfully');
}).catch((err) =>{
    console.log(`Connection failed: ${err}`);
});

const Todo = sequelize.define('todos', {
   taskName: {
       type: Sequelize.STRING,
       allowNull: false
   },
   priority : {
      type: Sequelize.STRING,
      allowNull: false
   },
   duration: {
       type: Sequelize.INTEGER,
       allowNull: false
   },
   isDone: {
       type: Sequelize.BOOLEAN,
       defaultValue: false
   }
});

sequelize.sync({force:true}).then(() =>{
    console.log('Tables created!')
}).catch((err) => {
    console.log(`Failed to create tables`);
})

app.post('/add-todo', (req, res) =>{
    Todo.create({
        taskName: req.body.taskName,
        priority: req.body.priority,
        duration: req.body.duration
    }).then((todo) =>{
        res.status(200).send(todo);
    }).catch((err) => {
        res.status(500).send(err);
    })
});

app.get('/get-all', (req, res) => {
   Todo.findAll().then((todos) =>{
       res.status(200).send(todos);
   }).catch((err) =>{
       res.status(500).send(err);
   })
});

app.listen(9099, () => {
    console.log('Server started on port 8080...')
})