function filtrar(){ //filtro pela pesquisa do input
    var semR = document.getElementById('sem_result');
        
    var input = document.getElementById("Search"); 
    var filter = input.value.toLowerCase();
    var cards_agentes = document.getElementsByClassName('card');
    var tlt  = document.getElementsByClassName('titlePKM');

    var countCards = 0;

    for (i = 0; i < cards_agentes.length; i++) {  
      if (tlt[i].innerText.toLowerCase().includes(filter)) { 
        cards_agentes[i].style.display = "flex"; 
        countCards += 1;
      } else {
        cards_agentes[i].style.display = "none";  
      }
    }

    if(countCards === 0){
        semR.style.display = "block";
        semR.innerText = `Sem resultados para "${input.value}"`
    }else{
        semR.style.display = "none";
        semR.innerText = "";     
    }

    var types = document.getElementById('typespkm');
    types.value = "todos";
   
}


function filtrarTipo(){ //filtro pelo select do tipo de pokemon
    var typ = document.getElementById('typespkm').value;

    var cards_agentes = document.getElementsByClassName('card');
    
        for(i = 0; i < cards_agentes.length; i++){
            if(cards_agentes[i].innerText.includes(typ)){
                cards_agentes[i].style.display = "flex";
            } else {
                if(typ === "todos"){
                    resetCards();
                }else{
                    cards_agentes[i].style.display = "none";
                }
              
            }
    }
    clear();
}

function resetCards(){ //volta os cards pra visiveis
    var cards_agentes = document.getElementsByClassName('card');

    for(i = 0; i < cards_agentes.length; i++){
        cards_agentes[i].style.display = "flex";
    }
}


function filtrarGeracao(){ //filtro pra geração

    var types = document.getElementById('typespkm');
    types.value = "todos";
    var generation = document.getElementById('genspkm').value;

    switch(generation){
        case "1g": 
            N1 = 0;
            N2 = 1;
            break;
        case "2g":
            N1 = 2;
            N2 = 3;
            break;
        case "3g":
            N1 = 4;
            N2 = 5;
            break;
        case "4g":
            N1 = 6;
            N2 = 7;
            break;
        case "5g":
            N1 = 8;
            N2 = 9;
            break;
        case "6g":
            N1 = 10;
            N2 = 11;
            break;
        case "7g":
            N1 = 12;
            N2 = 13;
            break;
        case "8g":
            N1 = 14;
            N2 = 15;
            break;
        case "9g":
            N1 = 16;
            N2 = 17;
    }
    
    fetchPokemon();
    clear();
}


function clear(){
    var input = document.getElementById("Search");
    input.value = "";

    var semR = document.getElementById('sem_result');
    semR.style.display = "none";
    semR.innerText = ""; 
}
