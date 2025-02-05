function filtrar(){
    // var cd = document.getElementsByClassName('card');
    var semR = document.getElementById('sem_result');
        
    var input = document.getElementById("Search"); //input de pesquisa dos agentes
    var filter = input.value.toLowerCase();  //variável filtro manda tudo pra letra minúscula
    var cards_agentes = document.getElementsByClassName('card');  //variável que pega todos os cards pela classe
    var tlt  = document.getElementsByClassName('titlePKM');

    var countCards = 0;

    
    for (i = 0; i < cards_agentes.length; i++) {   //for para habilitar os cards que batem com o valor da pesquisa
      if (tlt[i].innerText.toLowerCase().includes(filter)) { //if para verificar se o resultado bateu e habilitar o card 
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