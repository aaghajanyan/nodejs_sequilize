const { user: userModel, invitation: invitationModel } = require("../sequelize/models");
const User = require("../models/user");

const getUsers = (_, response) => {
    userModel.findAll({ attributes: { exclude: ["password"] } }).then(users =>
        response.status(200).json(users)
    );
};

const getUser = (request, response) => {
    userModel.findByPk(request.params.userId, {
        attributes: { exclude: ["password"] }
    }).then(user => response.status(200).json(user));
};

const updateUser = (request, response) => {
    User.update(request.params.userId, request.body).then(_ =>
        response.status(202).send()
    );
};

const signUp = (request, response) => {
    invitationModel.findByPk(request.body.invitationId).then(invitation => {
        if (!invitation) {
            return response.status(404).send("Invitation doesn't exist");
        }
        request.body.email = invitation.email;
        invitation.destroy();
        User.create(request.body).then(user =>
            response.status(201).json({ id: user.id })
        );
    });
};

module.exports = {
    getUsers,
    getUser,
    updateUser,
    signUp
};