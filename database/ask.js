var conn = require('./db');

module.exports = {

    saveAsk(fields){

        return new Promise((resolve, reject)=>{

            conn.query('INSERT INTO tb_ask (ask) VALUES (?)', [
                fields
            ], (err, results)=>{

                if(err){

                    reject(err)
                }else{

                    resolve(results)
                }
            }); 
        
        })
        
        
    },

    getAsk(){

        return new Promise((resolve, reject)=>{

            conn.query('SELECT * FROM tb_ask ORDER BY id DESC', (err, results)=>{

                if(err){
                    reject(err)
                }else{

                    resolve(results)
                }
            })
        })
    }


}

