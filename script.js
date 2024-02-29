const tentativaDoUsuario = document.getElementById("tentativaDoUsuario");
const send = document.getElementById("send");
const audioSeCorreto  = document.getElementById("audioSeCorreto");
const result = document.getElementById("result");
const tentativasFeitas = document.getElementById("tentativas");

let randomNumber = Math.floor(Math.random()*100 + 1)
let isCorrect = false;
let tentativas = 0; 

console.log(typeof(randomNumber), randomNumber);

function enviarResposta() {    
    const userGuess = parseInt(tentativaDoUsuario.value);
    if (userGuess != Number(userGuess) || userGuess>100 || userGuess < 1){
        result.innerText = "Entrada inválida";
        tentativaDoUsuario.innerText = " ";
        tentativas++;
        tentativasFeitas.innerText = "Tentativas Feitas " + tentativas;
        tentativaDoUsuario.className = "errado"
  
    }
    else if (userGuess > randomNumber){
        result.innerText = "ERRADO! Tente um numero mais baixo"
        tentativaDoUsuario.innerText = " "
        tentativas++;
        tentativasFeitas.innerText = "Tentativas Feitas " +  tentativas;
 
    }
    else if (userGuess  < randomNumber){
        result.innerText= "ERRADO! Tente um numero mais alto"
        tentativaDoUsuario.innerText = " "
        tentativas++;
        tentativasFeitas.innerText = "Tentativas Feitas " + tentativas;
      
    }
    else{
        audioSeCorreto.play();
        result.innerText= `Parabéns! O número correto era ${randomNumber}`
        isCorrect = true;            
        tentativasFeitas.innerText = "Tentativas Feitas " + tentativas;
    }

}

send.onclick = function () {
    enviarResposta();
}

tentativaDoUsuario.addEventListener("keyup", (e) => {
    if(e.keyCode === 13) {
        enviarResposta();    
    }
}) 