const key = '8619ca13884a062b0692e3e1bc1bcebc';


function cliqueNoBotaoBuscar() {
    const cidadeInserida = document.getElementById('informacao-cidade').value;

    buscarCidade(cidadeInserida);
}

async function buscarCidade(cidadeInserida){
    const apiBuscarDados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidadeInserida}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json());

    inserirDadosNaTela(apiBuscarDados);
    console.log(apiBuscarDados);
}

 function inserirDadosNaTela(apiBuscarDados) {

     document.querySelector('.previsao-cidade').innerHTML = "Tempo em: " + apiBuscarDados.name
     document.querySelector('.tempo').innerHTML = apiBuscarDados.weather[0].description

}



