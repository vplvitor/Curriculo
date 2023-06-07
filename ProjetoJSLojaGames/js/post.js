// functions
function fazPost(url, body){
    let req = new XMLHttpRequest()
    req.open("POST", url, true)
    req.setRequestHeader("Content-type", "application/json")
    req.send(JSON.stringify(body))
    req.onload = function(){
        console.log(this.responseText)
    }
    return req.responseText
}


function cadastrarUsuario(){
    let url = "http://localhost:3000/login"
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let birth = document.getElementById('birth').value
    body = {
        "nome": name,
        "email": email,
        "senha": password,
        'nascimento': birth
    }
    fazPost(url, body)
}