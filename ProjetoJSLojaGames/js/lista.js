function fazGet(url){
    let req = new XMLHttpRequest()
    req.open("GET", url, false)
    req.send()
    return req.responseText
}
function fazLinha(usuario){
    let linha = document.createElement('tr')
    let colId = document.createElement('td')
    let colName = document.createElement('td')
    let colEmail = document.createElement('td')
    let colPassword = document.createElement('td')
    let colBirth = document.createElement('td')
    colId.innerHTML = usuario.id_login_pk
    colName.innerHTML = usuario.name
    colEmail.innerHTML = usuario.email
    colPassword.innerHTML = usuario.password
    colBirth.innerHTML = usuario.birth
    linha.appendChild(colId)
    linha.appendChild(colName)
    linha.appendChild(colEmail)
    linha.appendChild(colPassword)
    linha.appendChild(colBirth)
    
    return linha
}

function main(){
    let dados = fazGet("http://localhost:3000/login")
    let tab = document.getElementById('tabela')
    console.log(dados)
    let usuario = JSON.parse(dados)
    console.log(dados)
    usuario.forEach(element => {
        let linha = fazLinha(element)
        tab.appendChild(linha)

    });
}



main()