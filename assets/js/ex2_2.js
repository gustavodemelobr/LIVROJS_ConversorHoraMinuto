//Cria referência ao form e aos elementos h3 e h4(respostas)
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

//Cria um "ouvinte" do evento, acionado quando o botao submit for clicado
frm.addEventListener("submit", (e) => {
    const titulo = frm.inTitulo.value;
    const duracao = Number(frm.inDuracao.value);

    const horas = Math.floor(duracao / 60); //Arredonda para baixo o resultado
    const minutos = duracao % 60;           //Obtém o resto da divisão

    resp1.innerText = titulo;               //Exibe as respostas
    resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`;
    
    e.preventDefault();                     //Evita o envio do form
})