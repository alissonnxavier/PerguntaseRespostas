const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const formidable = require('formidable');
const conn = require('./database/db');
const ans = require('./database/answer');
const ask = require('./database/ask');










app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {

    let answer = {}

    ans.getAnswer().then(result=>{

        answer = result
    })

  
    ask.getAsk().then(result=>{

        res.render('index', {

            perguntas: result,
            result: answer
        })
    })
    
});

app.get('/ask', (req, res) => { 

    res.render('ask');

})

app.post('/ask', (req, res) => {

    var form = new formidable.IncomingForm({

        uploadDir: './upload',
        keepExtensions: true
    });

    form.parse(req, (err, fields, files)=>{

        console.log(fields.question);
        ask.saveAsk(fields.question).then(data =>{

            res.send(data);
            
            
        });

        
              
    })
    
});

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