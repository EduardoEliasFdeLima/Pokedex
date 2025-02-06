function filtrar(){
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


function filtrarTipo(){
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

function resetCards(){
    var cards_agentes = document.getElementsByClassName('card');

    for(i = 0; i < cards_agentes.length; i++){
        cards_agentes[i].style.display = "flex";
    }
}

function clear(){
    var input = document.getElementById("Search");
    input.value = "";

    var semR = document.getElementById('sem_result');
    semR.style.display = "none";
    semR.innerText = ""; 
}