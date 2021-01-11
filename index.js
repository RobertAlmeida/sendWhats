const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sendMsg = require('./sessions');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));



app.get('/:number', async (req, res) => {
    let number = req.params.number;
    let retorno = await sendMsg(number);
    res.send(retorno);
});

app.listen(3000);
console.log('Aplicação Rodando!!')
