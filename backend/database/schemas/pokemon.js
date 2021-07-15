const Mongoose = require('mongoose');

/**
 * Attack collection schema
 * @type {Mongoose.Schema}
 */
const PokemonSchema = new Mongoose.Schema({
    _id: {type: String, required: true, default: () => { return Mongoose.Types.ObjectId()._id}},
    pokemonID: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    avatar: { type: String, required: true },
    types: [{type: String}],
    stats: {
        hp: { type: Number, required: true },
        attack: { type: Number, required: true },
        defense: { type: Number, required: true },
        specialAttack: { type: Number, required: true },
        specialDefense: { type: Number, required: true },
        speed: { type: Number, required: true },
    }
});

/**
 * Model of payload schema
 */
const pokemonModel = Mongoose.model('pokemon', PokemonSchema);

module.exports = pokemonModel;
