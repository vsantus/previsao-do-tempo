const key = '8619ca13884a062b0692e3e1bc1bcebc';


async function buscarCidade (cidadeInserida){
    const apiBuscarDados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidadeInserida}&appid=${key}`).then(resposta => resposta.json());

    console.log(apiBuscarDados);
}

function cliqueNoBotaoBuscar () {
    const cidadeInserida = document.getElementById('informacao-cidade').value;

    buscarCidade(cidadeInserida);
}

