// importa oas bibliotecas
const express = require('express'); // 
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('bodyParser');

//configurar as variáveis de ambiente 
dotenv.config(); // carregar as variáveis de ambiente definidas no arquivo .env para o process.env.


//Inicializa uma nova aplicação Express 
const app = express();


//Configura o CORS e o body-parser 
app.use(cors());
app.use(bodyParser.json());




