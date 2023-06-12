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
    let url = "http://localhost:5500/register"
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let birth = document.getElementById('birth').value
    body = {
        'name': name,
        'email': email,
        'password': password,
        'birth': birth
    }
    console.log(body);
    fazPost(url, body)
}
