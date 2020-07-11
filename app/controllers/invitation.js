const { invitation: invitationModel, user: userModel } = require("../sequelize/models");

const checkInvitationInDB = (request, response) => {
    invitationModel.findByPk(request.params.id).then(invitation => {
        invitation ? response.status(204).send() : response.status(404).send();
    });
};

const addInvitation = (request, response) => {
    invitationModel.findOne({ where: { email: request.body.email } }).then(invitation => {
        if (!invitation) {
            userModel.findOne({ where: { email: request.body.email } }).then(user => {
                if (!user) {
                    invitationModel.create(request.body).then(invitation => {
                        response.status(200).json({ id: invitation.id });
                    });
                } else {
                    response.status(409).send("Email already exists in users");
                }
            });
        } else {
            response.status(409).send("Email already exists in invitations");
        }
    });
};

module.exports = {
    addInvitation,
    checkInvitationInDB
};
