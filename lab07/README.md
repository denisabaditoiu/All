# MySQL Setup For C9

- ### Complete setup for mysql: `sudo mysql_secure_installation`;
- ### Authenticate into mysql by using: `sudo mysql -uroot -p`;
- ### Delete root user: `DROP USER 'root'@'localhost';`
- ### Create another root user: `CREATE USER 'root'@'%' IDENTIFIED BY 'p@ss';`
- ### Grant privileges: `GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;`
- ### Apply changes: `FLUSH PRIVILEGES;`