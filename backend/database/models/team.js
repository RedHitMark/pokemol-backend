const teamModel = require('../mongo').models.team;

async function create(data) {
    let newPayload = new teamModel(data);
    return newPayload.save();
}
async function readOneById(payload_id) {
    return teamModel.findById(payload_id).lean().exec();
}
async function readAll(data) {
    return teamModel.find(data).lean().exec();
}
async function deleteOne(payload_id) {
    return teamModel.deleteOne({_id: payload_id}).lean().exec();
}
async function updateOne(payload_id, update_payload) {
    return teamModel.updateOne({ _id: payload_id }, { $set: update_payload}).lean().exec();
}


module.exports = {
    create,
    readAll,
    readOneById,
    deleteOne,
    updateOne
};
