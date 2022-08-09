class Answer{

    constructor(){

        this.Btn = document.querySelectorAll('.btn-outline-success');
        this.btnKeyAnswer = document.querySelector('#keyanswer');
        this.btnSentAnswer = document.querySelector('#sentAnswer');
        
        this.eventForAllButtons(this.Btn);
        this.sentAnswer();

    }


    eventForAllButtons(Btn){

        [...Btn].forEach(button =>{

            button.addEventListener('click', ()=>{

                this.btnKeyAnswer.value = button.id

                console.log('fui clicado e sou o numero: ' + button.id)


                console.log('esta e o id atual ' + this.btnKeyAnswer.value)
            })
        })
    }

    sentAnswer(){

        this.btnSentAnswer.addEventListener('click',()=>{

            var id = document.querySelector('#keyanswer').value;
            var answer = document.querySelector('#message-text').value;

            let promises = [];
            
                promises.push(new Promise((resolve, reject)=>{

                let ajax = new XMLHttpRequest();

                ajax.open('POST', '/saveanswer');

                ajax.onload = event => {

                    try{

                        resolve(JSON.parse(ajax.responseText));
                    } catch(e){

                        reject(e);
                    }
                }

                ajax.onerror = event =>{

                    reject(event);
                }

                let formData = new FormData();

                formData.append('id', id);
                formData.append('answer', answer)

                ajax.send(formData);

                window.location.reload();
            }))

            return Promise.all(promises)
        })

        
    }

    senAsk(){

        
    }

   
}


var ans = new Answer();