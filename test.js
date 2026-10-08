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


atualizaCidade("Natal", "Mossoró");
console.log(cidades);


cidades.forEach(function(cidade, index){
    console.log(`A cidade ${cidade} está na posição ${index}`);
});

Object.keys(cidades).forEach(function(key){
    console.log(`A cidade ${cidades[key]} está na posição ${key}`);
});


cidades.filter(function(cidade){
    return cidade.length > 10 && cidade.charAt(0) == "S";
})

var cidadesAoContrario = cidades.reverse();
console.log(cidadesAoContrario);

var cidadesAoContrario2 = function(cidades){
    let cidadesReversas = [];
    for(let i = cidades.length - 1; i>= 0; i--){
        cidadesReversas.push(cidades[i]);
    }
    return cidadesReversas;
};


function cidadesReverseridas(cidades){
    let trocadasA = [];
    let trocadasB = [];
    for (let i = 0; i < cidades.length; i++){
        trocadasA.push(cidades[i]);
    }
    for (let i = trocadasA.length - 1; i >= 0; i--){
        trocadasB.push(trocadasA[i]);
    }
    return trocadasB;
}       