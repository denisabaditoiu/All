const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const app = express();
app.use(bodyParser.json());

const sequelize = new Sequelize('c9', 'cosmincartas', '', {
   host: 'localhost',
   dialect: 'mysql',
   operatorsAliases: false,
   pool: {
        "max": 1,
        "min": 0,
        "idle": 20000,
        "acquire": 20000
    }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

//Define the User Model

const User = sequelize.define('users', {
   name: {
       type: Sequelize.STRING,
       allowNull: false
   }, 
   surname: {
        type: Sequelize.STRING,
        allowNull: false
   },
   username: {
       type: Sequelize.STRING,
       allowNull: false,
       primaryKey: true
   }, 
   password : {
       type: Sequelize.STRING,
       allowNull: false
   }
});

// Define the ToDo Model
const ToDo = sequelize.define('todos', {
   identifier: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
   taskName: {
      type: Sequelize.STRING,
      allowNull: false
   }, 
   priority: {
       type: Sequelize.STRING,
       allowNull: false
   },
   duration: {
       type: Sequelize.INTEGER,
       allowNull: false
   },
   status: {
       type: Sequelize.BOOLEAN,
       allowNull: false,
       defaultValue: false
   }
});

ToDo.belongsTo(User);

sequelize.sync({force: true}).then(()=>{
    console.log('Databases create successfully')
})

app.post('/register', (req, res) =>{
    User.create({
        name: req.body.name,
        surname: req.body.surname,
        username: req.body.username,
        password: req.body.password
    }).then((user) => {
        res.status(200).send("User created successfully");
    }, (err) => {
        res.status(500).send(err);
    })
})

app.post('/login', (req, res) => {
   User.findOne({where:{username: req.body.username, password: req.body.password} }).then((result) => {
       res.status(200).send(result)
   }) 
});

app.post('/add-todo', (req,res) => {
    ToDo.create({
        
        taskName: req.body.taskName,
        priority: req.body.priority,
        duration: req.body.duration,
        userUsername: req.body.username
    }).then((user) => {
       res.status(200).send(user); 
    }, (err) =>{
      res.status(500).send(err);  
    });
})

app.get('/get-all-todos', (req,res) =>{
    ToDo.findAll().then((todos) =>{
        res.status(200).send(todos);    
    });
    
});

app.listen(8080, ()=>{
    console.log('Server started on port 8080...');
})

