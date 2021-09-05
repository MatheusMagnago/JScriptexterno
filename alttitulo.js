var tamanho = 40;
document.addEventListener("DOMContentLoaded", criabotao);
document.addEventListener("DOMContentLoaded", criabotao2);

function aumenta() {
    const h1 = document.querySelector('h1');
     h1.style.fontSize = tamanho + 'px';
    tamanho++;
}

function diminui() {
    const h1 = document.querySelector('h1');
    h1.style.fontSize = tamanho + 'px';
    tamanho--;
}

function criabotao() {
    const botao = document.createElement('button');
    botao.innerHTML = "+";
    document.body.append(botao); 
    botao.addEventListener("click", aumenta);   
}
        
function criabotao2() {
    const botao2 = document.createElement('button');
    botao2.innerHTML = "-";
    document.body.append(botao2);
    botao2.addEventListener("click", diminui);            
}
        