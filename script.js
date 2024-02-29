const tentativaDoUsuario = document.getElementById("tentativaDoUsuario");
const send = document.getElementById("send");
const audioSeCorreto  = document.getElementById("audioSeCorreto");
const result = document.getElementById("result");
const tentativasFeitas = document.getElementById("tentativas");
const audioSeErrado= document.getElementById("audioSeErrado");
const container = document.getElementById("container");

let randomNumber = Math.floor(Math.random()*100 + 1);
let isCorrect = false;
let tentativas = 0; 
audioSeCorreto.volume = 0.1;
audioSeErrado.volume = 0.1;

console.log(typeof(randomNumber), randomNumber);

function seErrado() {
    tentativas++;
    audioSeErrado.play();
    container.classList.add("errado");
}

function enviarResposta() {    
    const userGuess = parseInt(tentativaDoUsuario.value);
    if (userGuess != Number(userGuess) || userGuess>100 || userGuess < 1){
        result.innerText = "Entrada inválida";
        tentativaDoUsuario.innerText = " ";  
        seErrado();
    }
    else if (userGuess > randomNumber){
        result.innerText = "ERRADO! Tente um numero mais baixo"
        tentativaDoUsuario.innerText = " "
        seErrado(); 
    }
    else if (userGuess  < randomNumber){
        result.innerText= "ERRADO! Tente um numero mais alto"
        tentativaDoUsuario.innerText = " "
        seErrado();      
    }
    else{
        audioSeCorreto.play();
        result.innerText= `Parabéns! O número correto era ${randomNumber}`
        container.classList.add("coreto");
        isCorrect = true;            
        tentativasFeitas.innerText = "Tentativas Feitas " + tentativas;
        send.classList.add("hidden");
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