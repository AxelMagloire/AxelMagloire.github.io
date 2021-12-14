
function consulterPokemon(id, num){

fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
.then(function(response){
    response.json()
    .then(function(pokemon){
        console.log(pokemon.name)
    })
})
}

function consulter2Pokemon(){
 let premierId= Math.round(Math.round()*150)
let secondId= Math.round(Math.round()*150)  

consulterPokemon(premierId, 1)
consulterPokemon(secondId, 2)
}
consulterPokemon(2, 1)
consulterPokemon(1, 2)
consulter2Pokemon()