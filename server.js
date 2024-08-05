// importa oas bibliotecas
const express = require('express'); // 
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

//configurar as variáveis de ambiente 
dotenv.config(); // carregar as variáveis de ambiente definidas no arquivo .env para o process.env.


//Inicializa uma nova aplicação Express 
const app = express();


//Configura o CORS e o body-parser 
app.use(cors());
app.use(bodyParser.json());


//Rota inicial para testar o servidor

app.get('/',(req,res) => {
    res.send('Servidor esta rodando')
});

// Configura o servidor para escutar em uma porta específica 

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => { 
    console.log(`Servidor rodando na porta ${PORT}`); 
   }); 


