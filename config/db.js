//importar a biblioteca mysql2 e criar a conexão com o Banco de Dados

const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config()



const db = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME,
});


db.connect((err) => {
    if(err){
        console.error('erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log(`Conectado ao banco de dados ${process.env.DB_NAME}`);
});



module.exports = db;