// const Pokedex = require('pokedex-promise-v2');
// const P = new Pokedex();

exports.handler = async (event) => {
    // with Promise
    return await fetch(
        'https://https://pokeapi.co/api/v2/pokemon?offset=0&limit=100')
    .then(data => {
        return {
            statusCode: 200,
            body: data
        }
    })

};
