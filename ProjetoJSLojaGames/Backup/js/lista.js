function fazLinha(usuario) {
    let linha = document.createElement('tr');
    let colId = document.createElement('td');
    let colName = document.createElement('td');
    let colEmail = document.createElement('td');
    let colPassword = document.createElement('td');
    let colBirth = document.createElement('td');
    colId.innerHTML = usuario.idRegister;
    colName.innerHTML = usuario.name;
    colEmail.innerHTML = usuario.email;
    colPassword.innerHTML = usuario.password;
    colBirth.innerHTML = usuario.birth;
    linha.appendChild(colId);
    linha.appendChild(colName);
    linha.appendChild(colEmail);
    linha.appendChild(colPassword);
    linha.appendChild(colBirth);
    return linha;
  }
  
  function main() {
    let tab = document.getElementById('tabelaAccount');
    try {
      fetch('http://localhost:5500/account')
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro ao buscar os dados.');
          }
          return response.json();
        })
        .then(data => {
          data.forEach(element => {
            let linha = fazLinha(element);
            tab.appendChild(linha);
          });
        })
        .catch(error => {
          console.log('Erro:', error);
        });
    } catch (error) {
      console.log('Erro:', error);
    }
  }
  
  main();
  