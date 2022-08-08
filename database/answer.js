var conn = require('./db');

module.exports = {

    getAnswer(){

        return new Promise((resolve, reject)=>{

            conn.query('SELECT * FROM tb_answer', (err, results)=>{

                if(err){

                    reject(err)
                }else{

                    resolve(results);
                }
            });
        })
    }
}