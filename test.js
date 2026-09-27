let cidades = ["Natal", "Parnamirim", "Santo antonio", "São Paulo do Potengi"];

if(cidades.length > 0 && cidades[1].charAt(0) == "P"){
    console.log("A cidade começa com a letra P");
}

cidades.forEach(function(cidade){
    console.log(cidade);
});

cidades.forEach(x => console.log(x.length));