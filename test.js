let cidades = ["Natal", "Parnamirim", "Caíco", "Santo antonio", "São Paulo do Potengi"];

if(cidades.length > 0 && cidades[1].charAt(0) == "P"){
    console.log("A cidade começa com a letra P");
}

cidades.forEach(function(cidade){
    console.log(cidade);
});

cidades.forEach(x => console.log(x.length));


function addCidade(cidade){
    cidades.push(cidade);
}

function removeCidade(cidade){
    let index = cidades.indexOf(cidade);
    if(index > -1){
        cidades.splice(index, 1); // cidades[cidade].remove()?
    }
}

const cidadeTamanho = cidades.map(cidade => cidade.length);

console.log(cidades);
console.log(cidadeTamanho);

removeCidade("Parnamirim")

console.log(cidades);


const atualizaCidade = (cidadeAntiga, cidadeNova) => {
    let index = cidades.indexOf(cidadeAntiga);
    if(index > -1){
        cidades[index] = cidadeNova;
    }
}

atualizaCidade("Caíco", "Santa Cruz"); 
console.log(cidades);