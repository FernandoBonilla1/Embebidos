const { Pool } = require('pg');
const db = require('./db.json')

const connection = new Pool({
    host: db.host,
    user: db.user,
    password: db.password,
    database: db.database,
    port: db.port,
    ssl: {
        rejectUnauthorized: false
    }
});

connection.connect((error) =>{
    if(error){
      console.log('El error de conexion es: ' + error);
      return;
    }
    console.log('¡Conectado a la base de datos!');
  });

module.exports = connection;