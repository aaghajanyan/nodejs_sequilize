const { user: userModel } = require("../sequelize/models");
const bcrypt = require("bcrypt");

const saltRounds = 10;

class User {
    static create(data) {
        data.password = bcrypt.hashSync(data.password, saltRounds);
        return userModel.create(data);
    }

    static update(id, data) {
        if (data.password) {
            data.password = bcrypt.hashSync(data.password, saltRounds);
        }
        return userModel.update(data, { where: { id: id } });
    }
}

module.exports = User;
