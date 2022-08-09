class Ask{

    constructor(){

        this.btnSentAsk = document.querySelector('#btnask');
        

        this.sentAsk();

        console.log(this.btnSentAsk);
        
    }

    sentAsk(){

        this.btnSentAsk.addEventListener('click', ()=>{

            var ask = document.querySelector('#ask').value;

            console.log(ask)

            
                let promise = new Promise((resolve, reject)=>{

                let ajax = new XMLHttpRequest();

                ajax.open('POST', '/ask');

                ajax.onload = event => {

                    try{ 

                        resolve(JSON.parse(ajax.responseText));
                    }catch(e){

                        reject(e);
                    }
                }

                ajax.onerror = event =>{

                    reject(event)
                }

                let formData = new FormData();

                formData.append('question', ask);

                ajax.send(formData);

                window.location.reload();

               
            })

            

        })
            
    }


}

var newAsk = new Ask();