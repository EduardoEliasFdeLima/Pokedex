const geracoes = [1, 151, 152, 251, 252, 386, 387, 493, 494, 649, 650, 721, 722, 809, 810, 905, 906, 1025];
///***************111111||22222222||33333333||44444444|||5555555||66666666||77777777||888888888||999999999*/

var N1 = 0;
var N2 = 1;

const fetchPokemon = () => {
    const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`
  
    const pokemonPromises = [];

    for (let i = geracoes[N1]; i <= geracoes[N2]; i++){
        pokemonPromises.push(fetch(getPokemonUrl(i)).then(response => response.json()))
    }

    Promise.all(pokemonPromises).then(pokemons => {
        const card = document.querySelector('[data-js="pokedex"]');

        card.innerHTML = pokemons.map(pokemon => {
            const types = pokemon.types.map(typeInfo => typeInfo.type.name);

            return `
                <div class="card ${flag ? 'dark' : ''}">
                    <div class="top-color ${types[0]}">
                        <h3>${pokemon.id}</h3>
                    </div>
                    <div class="circleimg ${flag ? 'dark' : ''}">
                        <img alt="${pokemon.name}" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id.toString().padStart(3, '0')}.png">
                    </div>
                    <div class="text">
                        <h2 class="titlePKM ${flag ? 'dark' : ''}">${pokemon.name}</h2>
                        <div class="types">
                            <span class="${types[0]}">${types[0]}</span>    
                            ${types[1] ? `<span class="${types[1]}">${types[1]}</span>` : ''}
                        </div>  
                    </div>
                </div>
            `;
        }).join('');
    });

};

fetchPokemon();
