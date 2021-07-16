const teamModel = require('../mongo').models.team;


async function readAll(data) {
    return teamModel.find(data).sort({ name:0 }).lean().exec();
}
async function readByTeamName(teamName) {
    return teamModel.findOne({name:teamName}).lean().exec();
}
async function readByTeamNameAndSubmissionId(teamName, submissionID) {
    return teamModel.findOne({name:teamName, submissionID: submissionID}).lean().exec();
}
async function update(teamID, newTeam) {
    return teamModel.updateOne({ _id: teamID }, { $set: newTeam}).lean().exec();
}


module.exports = {
    readAll,
    readByTeamName,
    readByTeamNameAndSubmissionId,
    update
};
