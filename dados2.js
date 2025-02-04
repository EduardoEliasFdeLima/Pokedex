const fetchPokemon = () => {
    const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`
  
    const pokemonPromises = [];

    for (let i = 1; i <= 151; i++){
        pokemonPromises.push(fetch(getPokemonUrl(i)).then(response => response.json()))
    }

    Promise.all(pokemonPromises)
        .then(pokemons => {

            const lisPokemons = pokemons.reduce((accumulator, pokemon) => {
                const types = pokemon.types.map(typeInfo => typeInfo.type.name)

                accumulator += `
                    <div class="card">
                        <div class="top-color ${types[0]}">
                            <h3>${pokemon.id}</h3>
                        </div>
                        <div class="circleimg">
                            <img alt="${pokemon.name}" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id.toString().padStart(3, '0')}.png">
                        </div>
                        <div class="text">
                            <h2 class="titlePKM">${pokemon.name}</h2>
                            <div class="types">
                                <span class="${types[0]}">${types[0]}</span>    
                               ${types[1] ? `<span class="${types[1]}">${types[1]}</span>` : ''}
                            </div>  
                        </div>
                    </div>
                `
                return accumulator
            }, '')

            const ul = document.querySelector('[data-js="pokedex"]')

            ul.innerHTML = lisPokemons
        })
}

fetchPokemon();



function filtrar(){
    // var cd = document.getElementsByClassName('card');

    var input = document.getElementById("Search"); //input de pesquisa dos agentes
    var filter = input.value.toLowerCase();  //variável filtro manda tudo pra letra minúscula
    var cards_agentes = document.getElementsByClassName('card');  //variável que pega todos os cards pela classe
    var tlt  = document.getElementsByClassName('titlePKM')
    
  
  
    for (i = 0; i < cards_agentes.length; i++) {   //for para habilitar os cards que batem com o valor da pesquisa
      if (tlt[i].innerText.toLowerCase().includes(filter)) { //if para verificar se o resultado bateu e habilitar o card 
        cards_agentes[i].style.display = "flex"; 
      } else {
        cards_agentes[i].style.display = "none";
      }
    }
   
}