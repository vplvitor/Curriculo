function tabuada()
{
    let numero = document.getElementById('numero').value;
    let divisoria = document.getElementById("result");
    divisoria.innerHTML = `<p>A Tabuada é do ${numero}</p>`;
    for(let i = 1; i <= 10; i++)
    {
        let result = numero * i;
        const node = document.createElement("p");
        const tabuadaFinal = document.createTextNode(`${numero} x ${i} = ${result}`);
        node.appendChild(tabuadaFinal);
        divisoria.appendChild(node);
    }


}
function tabuadaReversa()
{
    let numRev = document.getElementById('numRev').value;
    let tabRev = document.getElementById("tabRev");
    tabRev.innerHTML = `Lista da Tabuada reversa de ${numRev}`;
    for(let i = 0; i <= 10; i++)
    {
        let result = numRev / i;
        const node = document.createElement("p");
        const tabuadaReversa = document.createTextNode(`${numRev} / ${i} = ${result}`);
        node.appendChild(tabuadaReversa);
        tabRev.appendChild(node);
    }
}
let cont = 0;
function contador()
{
    
    cont = cont + 1;
    document.getElementById("cont").innerHTML = cont;
    if(cont == 5)
    {
        document.getElementById("cont").innerHTML = cont + " =^)";
    }
    
}
function random()
{
    let random = parseInt(Math.random()*100);
    document.getElementById("random").innerHTML = random;
}
function randomMaxMin()
{
    let randomMin = document.getElementById('randomMin').value.Math.ceil(randomMin);
    let randomMax = document.getElementById('randomMax').value.Math.floor(randomMax);
    let randomMaxMin = Math.floor(Math.random() * (randomMax - randomMin + 1) + randomMin);
    document.getElementById("randomMaxMin").innerHTML = randomMaxMin;
}