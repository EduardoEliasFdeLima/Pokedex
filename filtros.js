function filtrar(){
    // var cd = document.getElementsByClassName('card');
        
    var input = document.getElementById("Search"); //input de pesquisa dos agentes
    var filter = input.value.toLowerCase();  //variável filtro manda tudo pra letra minúscula
    var cards_agentes = document.getElementsByClassName('card');  //variável que pega todos os cards pela classe
    var tlt  = document.getElementsByClassName('titlePKM');

    
    for (i = 0; i < cards_agentes.length; i++) {   //for para habilitar os cards que batem com o valor da pesquisa
      if (tlt[i].innerText.toLowerCase().includes(filter)) { //if para verificar se o resultado bateu e habilitar o card 
        cards_agentes[i].style.display = "flex"; 
      } else {
        cards_agentes[i].style.display = "none";
      }
    }
   
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

}


function resetCards(){
    var cards_agentes = document.getElementsByClassName('card');

    for(i = 0; i < cards_agentes.length; i++){
        cards_agentes[i].style.display = "flex";
    }
}