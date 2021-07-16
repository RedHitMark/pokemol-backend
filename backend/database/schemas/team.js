const Mongoose = require('mongoose');

/**
 * Team collection schema
 * @type {Mongoose.Schema}
 */
const TeamSchema = new Mongoose.Schema({
    _id: {type: String, required: true, default: () => { return Mongoose.Types.ObjectId()._id}},
    name: {type: String, required: true},
    submissionID: {type: String, required: true},
    totalScore: {type: Number, required: true},
    captures: [ {
        timestamp: { type: Number, required: true, default: () => { return new Date().getTime() } },
        pokemon: { type: Object, required: true },
        score: { type: Number, required: true }
    } ]
});

/**
 * Model of payload schema
 */
const teamModel = Mongoose.model('team', TeamSchema);

module.exports = teamModel;
