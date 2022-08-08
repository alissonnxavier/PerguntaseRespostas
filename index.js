const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const AskModel = require('./database/ModelPergunta');
const Awnser = require('./database/Resposta');
const formidable = require('formidable');
const conn = require('./database/db');
const ans = require('./database/answer');





connection.authenticate().then(() => { console.log('Conexao realizada') }).catch((e) => { console.log(e) });




app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {

    var newAnswer = {};
    
    let result = ans.getAnswer().then(result=>{

        newAnswer = result
    });
    

    AskModel.findAll({raw: true, order:[['id','DESC']]}).then((perguntas) => {

        res.render('index', {
             perguntas: perguntas,
             result: newAnswer
             })
    });

    
});

app.get('/ask', (req, res) => { 

    res.render('ask');

})

app.post('/asked', (req, res) => {
 

    AskModel.create({
        titulo: 'req.body.title',
        descricao: 'req.body.description'
    });

   var data = req.body.data ;

   res.send(console.log(data))



})

app.post('/saveanswer', (req, res)=>{

    var form = new formidable.IncomingForm({

        uploadDir: './upload',
        keepExtensions: true
    })

    form.parse(req, (err, fields, files)=>{

        conn.query('INSERT INTO tb_answer (idAsk, answer) VALUES (?, ?)',[
            fields.id,
            fields.answer
        ])

        console.log(fields);
        res.send(fields);
    });
})

app.listen(3000, () => {

    console.log('Servidor rodando');
})