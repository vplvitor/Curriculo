function toJson(){

    // maneira mais dificil: na mão
    let jsonSend = 
    `{
    nome:"${document.getElementById('nome').value}",
    email:"${document.getElementById('email').value}",
    data:"${document.getElementById('data').value}",
    cep:"${document.getElementById('cep').value}",
    rua:"${document.getElementById('rua').value}",
    bairro:"${document.getElementById('bairro').value}",
    logradouro:"${document.getElementById('localidade').value}",
    uf:"${document.getElementById('uf').value}",
    ibge:"${document.getElementById('ibge').value}"
    }`;
    console.log(jsonSend);

    // Maneira mais fácil: stringify
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = document.getElementById('data').value;
    let cep = document.getElementById('cep').value;
    let rua = document.getElementById('rua').value;
    let bairro = document.getElementById('bairro').value;
    let logradouro = document.getElementById('localidade').value;
    let uf = document.getElementById('uf').value;
    let ibge = document.getElementById('ibge').value;
    let allJs = JSON.stringify({name: nome, email: email, data: data, cep: cep,
                             rua: rua, bairro: bairro, logradouro: logradouro, if: uf, ibge: ibge });
    
    
    
    
    console.log(allJs);
}