const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const AskModel = require('./database/ModelPergunta');


connection.authenticate().then(() => { console.log('Conexao realizada') }).catch((e) => { console.log(e) });




app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {

    AskModel.findAll({raw: true, order:[['id','DESC']]}).then((perguntas) => {

        res.render('index', { perguntas })
    })
});

app.get('/ask', (req, res) => {

    res.render('ask');

})

app.post('/asked', (req, res) => {

    title = req.body.title;
    description = req.body.description;

    AskModel.create({
        titulo: title,
        descricao: description
    });

    res.redirect('/');



})

app.listen(3000, () => {

    console.log('Servidor rodando');
})