# Create WEB API with Persistence layer

### Update NodeJS for Promise support

- `nvm install --lts` or `nvm install 10.13.0`;
- Check if everything is ok: `node -v` and `npm -v`;

### Setup MySQL Database

- `mysql-ctl install`;
- `mysql-ctl start`;
- Note down the `Root User` and `Database Name`;

### Create NodeJS Project

- `npm init`;

### Install Dependencies

- Express: `npm install express --save`;
- Body-Parser `npm install body-parser --save`;
- Sequelize `npm install sequelize --save`;
- MySQL Connector: `npm install mysql2 --save`;

### Automatic Restart on save of NodeJS Server

- Node Monitor: `npm install nodemon --save-dev`;

### Start NodeJS server

- `./node_modules/nodemon/bin/nodemon.js index.js`;