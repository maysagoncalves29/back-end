const express = require('express');
const cors = require('cors');
const app = express();

const Home = require('./models/Home')

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
});

app.get('/', async(req, res) => {
    return res.json({
        erro: false,
    });
});

app.post('/add-home', async (req, res) => {
    return res.json({
        erro:false,
        mensagem: "Erro: não cadastrado!"
    })
})

app.listen(3306, () => {
    console.log("Servidor iniciado na porta 3306: http://108.167.132.28:3306");
});