const pokemonModel = require('../mongo').models.pokemon;


async function readAll() {
    return pokemonModel.find({}, { '_id': false}).lean().exec();
}
async function readOneByPokemonId(pokemonId) {
    return pokemonModel.findOne({id: {$eq: pokemonId}}, { '_id': false}).lean().exec();
}

async function readOneByMongoId(mongoId) {
    console.log(mongoId.toString())
    return pokemonModel.findById(mongoId, { '_id': false}).lean().exec();
}


function evalScore(pokemon) {
    return Math.round((
        pokemon.stats.hp + pokemon.stats.speed +
        pokemon.stats.attack + pokemon.stats.defense +
        pokemon.stats.specialAttack + pokemon.stats.specialDefense ) / 6.0);
}

module.exports = {
    readAll,
    readOneByPokemonId,
    readOneByMongoId,
    evalScore
};
